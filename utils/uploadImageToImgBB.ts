export async function uploadImageToImgBB(imageFile: any) {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=6275db0e691646cab4b315f9b2ab2ff1&expiration=600`,
      {
        method: "POST",
        body: formData,
      }
    );

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }

    const data = await response.json();
    console.log(data);

    if (data.success) {
      console.log("Image uploaded successfully:", data.data);
      return data.data; // return the uploaded image data
    } else {
      throw new Error(`Image upload failed: ${data.status}`);
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}
