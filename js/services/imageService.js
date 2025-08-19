const IMAGE_API = 'http://localhost:8080/api/image'

export async function uploadImage(file){
    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch(`${IMAGE_API}/upload`, {
        method: 'POST',
        body: formData,
    });

    return res.json();
}

export async function uploadImageToFolder(file, folder){
    const formData = new FormData();
    formData.append('image', file);
    formData.append('folder', folder);

    const res = await fetch(`${IMAGE_API}/uploadInFolder`, {
        method: 'POST',
        body: formData,
    });

    return res.json();
}

