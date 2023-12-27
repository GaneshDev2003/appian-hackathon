import React, { useState, ChangeEvent } from 'react';
interface FileInputProps{
    fileContent: string;
    setFileContent: React.Dispatch<React.SetStateAction<string>>
}
export default function FileInput ({fileContent, setFileContent}:FileInputProps) {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setFileContent(content);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {fileContent && (
        <div>
          <h3>Text extracted from the file:</h3>
          <p>{fileContent}</p>
        </div>
      )}
    </div>
  );
};

