// import React, { useState } from 'react';

// const ParagraphGenerator = () => {
//   const [wordLength, setWordLength] = useState(5);
//   const [paragraphLength, setParagraphLength] = useState(10);
//   const [generatedParagraph, setGeneratedParagraph] = useState('');

//   const generateParagraph = () => {
//     const paragraph = [];
//     for (let i = 0; i < paragraphLength; i++) {
//       const word = Array.from({ length: wordLength }, () =>
//         String.fromCharCode(Math.floor(Math.random() * 26) + 97)
//       ).join('');
//       paragraph.push(word);
//     }
//     setGeneratedParagraph(paragraph.join(' '));
//   };

//   return (
//     <div>
//       <label>
//         Word Length:
//         <input
//           type="number"
//           value={wordLength}
//           onChange={(e) => setWordLength(Math.max(1, parseInt(e.target.value, 10)))}
//         />
//       </label>
//       <br />
//       <label>
//         Paragraph Length:
//         <input
//           type="number"
//           value={paragraphLength}
//           onChange={(e) => setParagraphLength(Math.max(1, parseInt(e.target.value, 10)))}
//         />
//       </label>
//       <br />
//       <button onClick={generateParagraph}>Generate Paragraph</button>
//       <p>{generatedParagraph}</p>
//     </div>
//   );
// };

// export default ParagraphGenerator;








import React, { useState } from 'react';

const ParagraphGenerator = () => {
  const [wordLength, setWordLength] = useState(0);
  const [generatedParagraph, setGeneratedParagraph] = useState('');

  const generateParagraph = () => {
    const paragraph = [];
    for (let i = 0; i < wordLength; i++) {
      const word = Array.from({ length: wordLength }, () =>
        String.fromCharCode(Math.floor(Math.random() * 26) + 65)
      ).join('');
      paragraph.push(word);
    }
    setGeneratedParagraph(paragraph.join(' '));
  };

  return (
    <div>
      <label style={{fontFamily:"sans-serif"}}>
        Word Length : 
        <input
          type="number"
          value={wordLength}
          style={{padding:10,border:'2px solid black'}}
          onChange={(e) => setWordLength(Math.max(parseInt(e.target.value)))}
        />
      </label>
      <br />
    
      <br />
      <button onClick={generateParagraph} style={{padding:10}}>Generate Paragraph</button>
      <p>{generatedParagraph}</p>
    </div>
  );
};

export default ParagraphGenerator;











