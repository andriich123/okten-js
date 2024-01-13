// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

import postService from "./post-service.js";
import { renderPostDetails, renderComments } from "./ui-render.js";

const userId = new URLSearchParams(window.location.search).get("id");

postService
  .getPostById(userId)
  .then((post) => {
    document.title = post.title;

    const postDetails = renderPostDetails(post);

    document.body.append(postDetails);
  })
  .then(() => {
    postService.getPostComments(userId).then((comments) => {
      const commentsContainer = document.querySelector(
        "#post-content__comments"
      );

      const commentsList = renderComments(comments);
      commentsContainer.replaceChildren(commentsList);
    });
  });
