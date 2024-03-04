import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';
import FileExplorer from './FileExplorer';
import Draggable from 'react-draggable';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [showIntro] = useState(true);
  const fileExplorer = FileExplorer();
  const terminalRef = useRef(null);

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleStop = () => {
    setIsDragging(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const executeCommand = (command) => {
    const [cmd, ...args] = command.trim().split(' ');
    switch (cmd) {
      case 'help':
        return fileExplorer.help();
      case 'ls':
        return fileExplorer.ls();
      case 'pwd':
        return fileExplorer.currentDirectory;
      case 'cat':
        return fileExplorer.readFile(args[0]);
      case 'cd':
        return fileExplorer.changeDirectory(args[0]);
      default:
        return `Command not found: ${cmd}`;
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim();
      setOutput([...output, { type: 'input', value: command }]);
      const commandOutput = executeCommand(command);
      setOutput([
        ...output,
        { type: 'output', value: `user@muzamilswebsite ~ % ${command}` },
        { type: 'output', value: commandOutput },
      ]);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <Draggable
      handle=".terminal-header"
      onStart={handleStart}
      onStop={handleStop}
      grid={[25, 25]}
      bounds={{ top: -50, left: -100, right: 100, bottom: 50 }}
      defaultClassName={isDragging ? 'terminal-dragging' : ''}
    >

      <div className="terminal" ref={terminalRef}>
        <div className="terminal-header">
          <div className="traffic-light-container">
            <div className="traffic-light red"></div>
            <div className="traffic-light yellow"></div>
            <div className="traffic-light green"></div>
          </div>
          user@muzammilswebsite - zsh
        </div>

        {showIntro && (
          <div className="output">
            <div>
              I'm Muzammil, Welcome to my website! You can find out more about me by using this terminal or scrolling down! Type help to begin to learn about me.
            </div>
          </div>
        )}

        {output.map((item, index) => (
          <div
            key={index}
            className={item.type}
            dangerouslySetInnerHTML={item.type === 'output' ? { __html: item.value } : null}
          />
        ))}
        <div className="input">
          <span>user@muzammilswebsite ~ %</span>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleEnterPress}
          />
        </div>
      </div>
    </Draggable>
  );
};

export default Terminal;