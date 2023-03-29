function isIncludeAdmin() {
    if (location.pathname.startsWith("/admin")) {
        return '/admin';
    }
    return '';
}

function readCsv(e: any, that: any, url: string) {
    console.log("🚀 ~ file: public.ts:9 ~ readCsv ~ this:", that)
    const file = e.target.files[0];
    if (file.type != "text/csv") {
        that.msg.error("文件类型错误");
        return;
    }
    that.uploading = true;
    let reader: any = new FileReader();
    const data: any = [];
    reader.onload = () => {
        const result: any = reader.result || '';
        let lines = result.split("\r\n");
        lines.map((item: string, index: any) => {
            let line = item.split(",");
            data.push(line);
        });
        // 处理数据
        handleData(data, that, url);
    };
    reader.readAsText(file, 'gb2312');
}
function handleData(data: (string | any[])[], that: any, url: string) {
    data.splice(0, 1);//删除表头
    let len = data.length;
    const resData = [];
    data.forEach((item: string | any[]) => {
        const sendData: any = {}
        for (let index = 0; index < that.columnKeyNameArr.length; index++) {
            const keyName = that.columnKeyNameArr[index];
            if (item[index]) {
                sendData[keyName] = item[index];
            }
        }

        if (JSON.stringify(sendData) === "{}") {
            len--;
            return;
        }
        that.rs.post(url, sendData).subscribe((res: any) => {
            resData.push(res);
            if (resData.length === len) {
                that.uploading = false;
                that.msg.success("导入成功!")
                that.load();
            }
        }, (error: any) => {
            console.log(error)
            that.uploading = false;
        })
    });
}
export {
    isIncludeAdmin,
    readCsv
}