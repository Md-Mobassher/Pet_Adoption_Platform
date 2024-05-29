export const modifyPayload = (values: any) => {
  const obj = { ...values };
  // const file = obj["image"];

  // delete obj["file"];
  // console.log(obj);
  const data = JSON.stringify(obj);

  // const formData = new FormData();
  // formData.append("data", data);
  // formData.append("file", file as Blob);

  return formData;
};
