import { useState } from 'react';

const FileExplorer = () => {
  const [currentDirectory, setCurrentDirectory] = useState('/home/user');
  const [fileContents] = useState({
    '/home/user/aboutme.txt': 'Hello! My name is Muzammil Shanjer. I am a third year computer science major at the University of Toronto. I am currently working on projects to build up proficiency in core frontend development technologies such as React. I am strongly interested in frontend development and looking out for internships beginning Summer 2024.',
    '/home/user/contactme': {},
    '/home/user/contactme/email.txt': 'mshanjer@gmail.com',
    '/home/user/contactme/phone.txt': '226 507 5936',
    '/home/user/contactme/linkedin.txt': '<a href="https://www.linkedin.com/in/mshanjer/" target="_blank">linkedin.com/in/mshanjer/</a>',
    '/home/user/contactme/github.txt': '<a href="https://github.com/minhalexus" target="_blank">github.com/minhalexus</a>',
    '/home/user/myskills': {},
    '/home/user/myskills/proficientskills.txt': 'C++, React, TypeScript, Java, Python, SQL',
    '/home/user/myskills/developingskills.txt': 'Go, Spring Boot, Ruby',
  });


  const [parentDirectory, setParentDirectory] = useState(null);

  const getCurrentDirectoryContents = () => {
    return listDirectory(currentDirectory);
  };

  const listDirectory = (directory) => {
    const traverseDirectory = (currentDir, result = new Set()) => {
      Object.keys(fileContents).forEach((path) => {
        if (path.startsWith(currentDir)) {
          result.add(path);
          if (typeof fileContents[path] === 'object') {
            traverseDirectory(path + '/', result);
          }
        }
      });
    };
  
    const entriesSet = new Set();
    traverseDirectory(directory, entriesSet);
  
    const entries = [...entriesSet].filter((path) => path !== directory);
  
    return entries;
  };

  const changeDirectory = (newDirectory) => {
    if (newDirectory === '..') {
      if (parentDirectory) {
        setCurrentDirectory(parentDirectory);
        setParentDirectory(null);
      } else {
        return 'cd: ../: No such file or directory';
      }
    } else if (newDirectory.startsWith('/')) {
      if (fileContents[newDirectory] && typeof fileContents[newDirectory] === 'object') {
        setParentDirectory(currentDirectory);
        setCurrentDirectory(newDirectory);
      } else {
        return `cd: ${newDirectory}: Not a directory`;
      }
    } else {
      const newPath = currentDirectory + '/' + newDirectory;
      if (fileContents[newPath] && typeof fileContents[newPath] === 'object') {
        setParentDirectory(currentDirectory);
        setCurrentDirectory(newPath);
      } else {
        return `cd: ${newDirectory}: Not a directory`;
      }
    }
  };

  const readFile = (filePath) => {
    if (filePath.startsWith('/')) {
      if (fileContents[filePath]) {
        return fileContents[filePath];
      } else {
        return `cat: ${filePath}: No such file or directory`;
      }
    } else {
      const fullPath = currentDirectory + '/' + filePath;
      if (fileContents[fullPath]) {
        return fileContents[fullPath];
      } else {
        return `cat: ${filePath}: No such file or directory`;
      }
    }
  };

  const ls = () => {
    const currentDirContents = getCurrentDirectoryContents();
  
    const relativePaths = currentDirContents
      .filter((path) => path.startsWith(currentDirectory) && path !== currentDirectory)
      .map((path) => path.substring(currentDirectory.length));
  
    const entriesInCurrentDir = relativePaths.filter((entry) => {
      const depth = entry.split('/').length - 1;
      return depth === 1;
    });
  
    return entriesInCurrentDir.join(' ');
  };

  const help = () => {
    return 'This terminal supports pwd, cd, ls and cat commands. Look through the folder structure to meet me!';
  };
  
  return { currentDirectory, getCurrentDirectoryContents, changeDirectory, readFile, ls, help };
};

export default FileExplorer;
