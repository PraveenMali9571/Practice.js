import fs from "fs";
import path from "path";
import readlineSync from "readline-sync";
const input = readlineSync.question("enter file Name with extension ");
 const _dirname = path.resolve();
 const filename = input;
 const fileLoc = path.join(_dirname, filename);
(function removingnewline(fileLoc) {
    const fileLocdata = fs.readFileSync(fileLoc, 'utf8');
    if (!fileLocdata) {
        throw Error("data not found");
    }
    function writefile(data) {
        fs.writeFileSync(fileLoc, data);
    }
    const txtDataArr = fileLocdata.split('\n');
    const lines = txtDataArr.filter((ele, idx) => ele.trim() !== '');
    const paraByline = lines.join('\n');
    writefile(paraByline);
    console.log("extra lines or spaces removed successfully");
    
})(fileLoc);