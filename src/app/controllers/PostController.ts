import Joi from 'joi';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Post from '../models/Post';

class PostController {
  async postRegister(req: Request, res: Response) {
    const {
      title, subtitle, content, imgurl,
    } = req.body;
    const schema = Joi.object({
      title: Joi.string().min(5).required(),
      subtitle: Joi.string().min(5).required(),
      content: Joi.string().min(5).required(),
      imgurl: Joi.string().min(5).required(),
    });

    const { error } = schema.validate({
      title, subtitle, content, imgurl,
    });
    const { message } = error ?? { message: '' };

    if (error) {
      res.json({ message }).status(400).end();
    }
    const repository = getRepository(Post);
    const post = repository.create({
      content, subtitle, title, imgurl,
    });
    await repository.save(post);

    res.json(post).end();
  }

  async getPost(_: null, res: Response) {
    const repository = getRepository(Post);

    const posts = await repository.find();

    res.json(posts);
  }

  async deletePost(req: Request, res: Response) {
    const { id } = req.body;
    const schema = Joi.object({
      id: Joi.number().required(),
    });

    const { error } = schema.validate({ id });
    const { message } = error ?? { message: '' };
    if (error) {
      res.json({ message }).status(400).end();
    }

    const repository = getRepository(Post);

    const deletedPost = await repository.delete({ id });

    if (deletedPost.affected === 0) {
      res.json({ message: 'invalid id' }).end();
    }
    res.json({ deletedPost }).end();
  }
}

export default new PostController();
