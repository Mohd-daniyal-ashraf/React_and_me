import React, { useCallback } from "react";
import { Button, Input, Select, RTE } from "../index";
import { useForm } from "react-hook-form";
import appwriteservice from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      title: post.title || "",
      content: post.connect || "",
      slug: post.slug || "",
      status: post.status || "",
    },
  });

  const navigate = useNavigate();
  const userdata = useSelector((state) => state.user.userdata);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteservice.uplodeFile(data.image[0])
        : null;
      if (file) {
        appwriteservice.deleteFile(post.featuredImage);
      }

      const dbpost = await appwriteservice.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbpost) {
        navigate(`/post/${$id}`);
      }
    } else {
      const file = await appwriteservice.uplodeFile(data.image[0]);
      if (file) {
        const fileid = file.$id;
        data.featuredImage = fileid;
        const dbpost = await appwriteservice.createPost({
          ...data,
          userId: userdata.$id,
        });
        if (dbpost) {
          navigate(`/post/${dbpost.$id}`);
        }
      }
    }
  };

  return <div>PostForm</div>;
}
