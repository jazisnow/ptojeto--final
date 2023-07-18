import { LikeOrDislikeDB } from "../models/LikeOrDislike";
import { BaseDataBase } from "./BaseDataBase";

export class likeDislikeDatabase extends BaseDataBase {
  private static LIKESDISLIKES_TABLE = "like_dislike";

  findLikesAndDislikesById = async (
    id_post: string,
    id_user: string
  ): Promise<LikeOrDislikeDB[]> => {
    const postLikedDB: LikeOrDislikeDB[] = await BaseDataBase.connection(
      likeDislikeDatabase.LIKESDISLIKES_TABLE
    )
      .where({ id_post })
      .andWhere({ id_user });

    return postLikedDB;
  };

  findLikesAndDislikesByIdPost = async (
    id_post: string
  ): Promise<LikeOrDislikeDB[]> => {
    const postLikedDB: LikeOrDislikeDB[] = await BaseDataBase.connection(
      likeDislikeDatabase.LIKESDISLIKES_TABLE
    ).where({ id_post });

    return postLikedDB;
  };

  newLikeOrDislike = async (newLike: LikeOrDislikeDB): Promise<void> => {
    await BaseDataBase.connection(
      likeDislikeDatabase.LIKESDISLIKES_TABLE
    ).insert(newLike);
  };

  updateLikeOrDislike = async (
    id_user: string,
    id_post: string,
    newLikeOrDislike: any
  ): Promise<void> => {
    await BaseDataBase.connection(likeDislikeDatabase.LIKESDISLIKES_TABLE)
      .update(newLikeOrDislike)
      .where({ id_post })
      .andWhere({ id_user });
  };

  deleteLikeOrDislike = async (id_post: string): Promise<void> => {
    await BaseDataBase.connection(likeDislikeDatabase.LIKESDISLIKES_TABLE)
      .del()
      .where({ id_post });
  };
}
