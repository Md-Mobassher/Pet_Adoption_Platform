async function uploadImageToImgBB(imageFile: any) {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetch(
    "https://api.imgbb.com/1/upload?key=your-api-key",
    {
      method: "POST",
      body: formData,
    }
  );

  return response;
}
