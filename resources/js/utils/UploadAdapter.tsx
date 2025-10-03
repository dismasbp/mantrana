export default class UploadAdapter {
    private loader: any;

    constructor(loader: any) {
        this.loader = loader;
    }

    upload() {
        return this.loader.file.then((file: File) => {
            const data = new FormData();
            data.append("upload", file);

            return fetch("/upload-image", {
                method: "POST",
                body: data,
                headers: {
                    "X-CSRF-TOKEN": (document.querySelector(
                        'meta[name="csrf-token"]'
                    ) as HTMLMetaElement)?.content || "",
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    return {
                        default: res.url,
                    };
                });
        });
    }

    abort() {}
}

export function CustomUploadAdapterPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
        return new UploadAdapter(loader);
    };
}
