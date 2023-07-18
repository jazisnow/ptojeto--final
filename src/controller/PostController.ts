import { Request, Response } from "express";

import { ZodError } from "zod";
import { BaseError } from "../erros/BaseError";
import { CreatePostSchema } from "../dtos/postDTO/createPost.dto";
import { GetPostSchema } from "../dtos/postDTO/getPost.dto";
import { EditPostSchema } from "../dtos/postDTO/editPost.dto";
import { DeletePostScheme } from "../dtos/postDTO/deletePost.dto";
import { LikeDislikePostSchema } from "../dtos/postDTO/likeDislikePost.dto";
import { PostBusiness } from "../bussines/PostBusiness";


export class PostController{
getPostById(arg0: string, getPostById: any) {
    throw new Error("Method not implemented.");
}
    static deletePost(arg0: string, deletePost: any) {
        throw new Error("Method not implemented.");
    }
    static editPosts(arg0: string, editPosts: any) {
        throw new Error("Method not implemented.");
    }
    static likesOrDislikes(arg0: string, likesOrDislikes: any) {
        throw new Error("Method not implemented.");
    }
    static createPost(arg0: string, createPost: any) {
        throw new Error("Method not implemented.");
    }
    static getPostsById(arg0: string, getPostsById: any) {
        throw new Error("Method not implemented.");
    }
    static getAllPosts(arg0: string, getAllPosts: any) {
        throw new Error("Method not implemented.");
    }

    constructor(

        private postBusiness: PostBusiness
    ){}


    public createPost = async (req: Request, res: Response ) => {
        try {
            const input = CreatePostSchema.parse({

                token: req.headers.authorization,
                content: req.body.content
            })

            const output = await this.postBusiness.createPost(input)
            console.log(input)
            res.status(201).send(output)

        } catch (error) {
            console.log(error)

            if(error instanceof ZodError){
                res.status(400).send(error.issues)

            }else if(error instanceof BaseError){

                res.status(error.statusCode).send(error.message)

            }else{

                res.status(500).send("Error inesperado")
            }
        }
    }


    public getPosts = async (req: Request, res: Response ) => {
        try {
            const input = GetPostSchema.parse({

                token: req.headers.authorization
            })

            const output = await this.postBusiness.getPosts(input)

            res.status(200).send(output)

        } catch (error) {
            console.log(error)

            if(error instanceof ZodError){
                res.status(400).send(error.issues)

            }else if(error instanceof BaseError){

                res.status(error.statusCode).send(error.message)

            }else{

                res.status(500).send("Error inesperado")
            }
        }
    }

    public editPost = async (req: Request, res: Response ) => {
        try {
            const input = EditPostSchema.parse({

                token: req.headers.authorization,
                content: req.body.content,
                idToPostEdit: req.params.id

            })

            const output = await this.postBusiness.editPost(input)

            res.status(200).send(output)

        } catch (error) {
            console.log(error)

            if(error instanceof ZodError){
                res.status(400).send(error.issues)

            }else if(error instanceof BaseError){

                res.status(error.statusCode).send(error.message)

            }else{

                res.status(500).send("Error inesperado")
            }
        }
    }

    public deletePost = async (req: Request, res: Response ) => {
        try {
            const input = DeletePostScheme.parse({

                token: req.headers.authorization,
                idToDelete: req.params.id

            })

            const output = await this.postBusiness.deletePost(input)

            res.status(200).send(output)

        } catch (error) {
            console.log(error)

            if(error instanceof ZodError){
                res.status(400).send(error.issues)

            }else if(error instanceof BaseError){

                res.status(error.statusCode).send(error.message)

            }else{

                res.status(500).send("Error inesperado")
            }
        }
}

public likeOrDislikePost = async (req: Request, res: Response ) => {
    try {
        const input = LikeDislikePostSchema.parse({

            token: req.headers.authorization,
            postId: req.params.id,           
            like: req.body.like

        })
       
        const output = await this.postBusiness.likeOrDislikePost(input)
       
        res.status(200).send(output)
        
    } catch (error) {
        console.log(error)

        if(error instanceof ZodError){
            res.status(400).send(error.issues)

        }else if(error instanceof BaseError){

            res.status(error.statusCode).send(error.message)

        }else{

            res.status(500).send("Error inesperado")
        }
    }
}

}