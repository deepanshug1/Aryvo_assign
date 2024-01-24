import { saveAs } from "file-saver";
import { ChangeEvent, FC, useState } from "react";
import { FaRegFile } from "react-icons/fa";
import "./FileUpload.css";

interface FileUploadProps {
  flabel: string;
  Required: string;
}

const FileUpload: FC<FileUploadProps> = ({ flabel, Required }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleViewClick = () => {
    if (file) {
      saveAs(file, file.name);
    }
  };

  return (
    <>
      <div className="file-upload">
        <label htmlFor="file-input" className="file-label">
          {file ? file.name : `${flabel}`}
          <FaRegFile id="ic" />
        </label>
        <input
          type="file"
          id="file-input"
          className="file-input"
          onChange={handleFileChange}
        />
      </div>
      <div id="date">20 / 04 / 2024</div>
      <div id="days">57 days</div>
      <button id="view-button" disabled={!file} onClick={handleViewClick}>
        View
      </button>
      <div id="req">{Required}</div>
      <br />
    </>
  );
};

export default FileUpload;
