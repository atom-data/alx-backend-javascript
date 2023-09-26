import asyncUploadUser from "./100-wait";

const test = async () => {
	const value = await asyncUploadUser();
	console.log(value);
};

test();
