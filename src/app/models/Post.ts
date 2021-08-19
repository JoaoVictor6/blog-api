import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  imgurl: string;

  @Column()
  content: string;
}

export default Posts;
