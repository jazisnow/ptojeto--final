import express from "express"
import { PostController } from "../controller/PostController"
import { PostBusiness } from "../bussines/PostBusiness"
import { PostDataBase } from "../database/PostDataBase"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { UserDataBase } from "../database/UserDataBase"
import { CommnetController } from "../controller/CommentController"
import { CommentBusiness } from "../bussines/CommentBusiness"
import { CommentDatabase } from "../database/CommentDatabase"
import { LikeDislikeCommentDatabase } from "../database/LikeDislikeCommentDatabase"



export const postRouter = express.Router()

export const postController = new PostController(

    new PostBusiness(

        new PostDataBase(),
        new UserDataBase(),
        new IdGenerator(),
        new TokenManager(),
    )
)

const commentController = new CommnetController(
  new CommentBusiness(
    new PostDataBase(),
    new CommentDatabase(),
    new LikeDislikeCommentDatabase(),
    new TokenManager(),
    new IdGenerator()
  )
);

postRouter.get("/", postController.getPosts);
postRouter.get("/:id", postController.getPostById);

postRouter.get("/", postController.getPosts)
postRouter.post("/:id/comment", commentController.createComment);
postRouter.post("/:id/post/like", postController.likeOrDislikePost);
postRouter.post("/:id/comment/like", commentController.likesOrDislikesComment);

postRouter.put("/:id/post", postController.editPost);
postRouter.put("/:id/comment", commentController.editComment);

postRouter.delete("/:id/post", postController.deletePost);
postRouter.delete("/:id/comment");
