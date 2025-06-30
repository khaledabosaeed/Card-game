// import React, { useState } from 'react'

// function LoginComponet() {
//     const [name, setName] = useState('');
//     const [level, setLevel] = useState('easy');

//     const handleLevelChange = (newLevel) => {
//         setLevel(newLevel);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Form submitted:', { name, level });
//         alert(`Name: ${name}\nLevel: ${level}`);
//     };

//     const handleReset = () => {
//         setName('');
//         setLevel('easy');
//     };

//     const styles = {
//         container: {
//             maxWidth: '500px',
//             margin: '2rem auto',
//             padding: '2rem',
//             backgroundColor: 'white',
//             borderRadius: '8px',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
//             fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
//         },
//         title: {
//             fontSize: '2rem',
//             fontWeight: 'bold',
//             textAlign: 'center',
//             marginBottom: '2rem',
//             color: '#1976d2'
//         },
//         inputGroup: {
//             marginBottom: '1.5rem'
//         },
//         label: {
//             display: 'block',
//             fontSize: '0.875rem',
//             fontWeight: '500',
//             color: '#374151',
//             marginBottom: '0.5rem'
//         },
//         input: {
//             width: '100%',
//             padding: '12px 16px',
//             border: '1px solid #d1d5db',
//             borderRadius: '4px',
//             fontSize: '1rem',
//             backgroundColor: 'white',
//             transition: 'border-color 0.2s, box-shadow 0.2s',
//             boxSizing: 'border-box',
//             outline: 'none'
//         },
//         inputFocus: {
//             borderColor: '#1976d2',
//             boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)'
//         },
//         toggleGroup: {
//             display: 'flex',
//             backgroundColor: 'white',
//             border: '1px solid #e0e0e0',
//             borderRadius: '4px',
//             overflow: 'hidden'
//         },
//         toggleButton: {
//             flex: 1,
//             padding: '12px 16px',
//             border: 'none',
//             backgroundColor: 'white',
//             cursor: 'pointer',
//             fontSize: '1rem',
//             fontWeight: '500',
//             transition: 'all 0.2s ease',
//             borderRight: '1px solid #e0e0e0'
//         },
//         toggleButtonLast: {
//             borderRight: 'none'
//         },
//         toggleButtonActive: {
//             backgroundColor: '#1976d2',
//             color: 'white'
//         },
//         toggleButtonHover: {
//             backgroundColor: '#f5f5f5'
//         },
//         buttonGroup: {
//             display: 'flex',
//             gap: '12px',
//             marginTop: '2rem'
//         },
//         button: {
//             flex: 1,
//             padding: '12px 24px',
//             border: 'none',
//             borderRadius: '4px',
//             fontSize: '1rem',
//             fontWeight: 'bold',
//             cursor: 'pointer',
//             transition: 'all 0.2s ease'
//         },
//         primaryButton: {
//             backgroundColor: '#1976d2',
//             color: 'white'
//         },
//         primaryButtonHover: {
//             backgroundColor: '#1565c0'
//         },
//         primaryButtonDisabled: {
//             backgroundColor: '#e0e0e0',
//             color: '#9e9e9e',
//             cursor: 'not-allowed'
//         },
//         outlineButton: {
//             backgroundColor: 'white',
//             color: '#1976d2',
//             border: '1px solid #1976d2'
//         },
//         outlineButtonHover: {
//             backgroundColor: '#f3f4f6'
//         },
//         preview: {
//             marginTop: '1.5rem',
//             padding: '16px',
//             backgroundColor: '#f8f9fa',
//             borderRadius: '4px',
//             border: '1px solid #e9ecef'
//         },
//         previewTitle: {
//             fontSize: '1rem',
//             fontWeight: 'bold',
//             marginBottom: '8px',
//             color: '#374151'
//         },
//         previewText: {
//             fontSize: '0.875rem',
//             color: '#6b7280',
//             margin: '4px 0'
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.title}>User Registration</h1>

//             <div>
//                 {/* Name Input Field */}
//                 <div style={styles.inputGroup}>
//                     <div style={styles.label}>Name *</div>
//                     <input
//                         type="text"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         placeholder="Enter your name"
//                         style={styles.input}
//                         onFocus={(e) => {
//                             e.target.style.borderColor = '#1976d2';
//                             e.target.style.boxShadow = '0 0 0 2px rgba(25, 118, 210, 0.2)';
//                         }}
//                         onBlur={(e) => {
//                             e.target.style.borderColor = '#d1d5db';
//                             e.target.style.boxShadow = 'none';
//                         }}
//                     />
//                 </div>

//                 {/* Level Toggle Menu */}
//                 <div style={styles.inputGroup}>
//                     <div style={styles.label}>Select Level:</div>
//                     <div style={styles.toggleGroup}>
//                         {['easy', 'hard', 'expert'].map((levelOption, index) => (
//                             <button
//                                 key={levelOption}
//                                 type="button"
//                                 onClick={() => handleLevelChange(levelOption)}
//                                 style={{
//                                     ...styles.toggleButton,
//                                     ...(index === 2 ? styles.toggleButtonLast : {}),
//                                     ...(level === levelOption ? styles.toggleButtonActive : {})
//                                 }}
//                                 onMouseEnter={(e) => {
//                                     if (level !== levelOption) {
//                                         e.target.style.backgroundColor = '#f5f5f5';
//                                     }
//                                 }}
//                                 onMouseLeave={(e) => {
//                                     if (level !== levelOption) {
//                                         e.target.style.backgroundColor = 'white';
//                                     }
//                                 }}
//                             >
//                                 {levelOption.charAt(0).toUpperCase() + levelOption.slice(1)}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div style={styles.buttonGroup}>
//                     <button
//                         type="button"
//                         disabled={!name.trim()}
//                         onClick={handleSubmit}
//                         style={{
//                             ...styles.button,
//                             ...styles.primaryButton,
//                             ...(name.trim() ? {} : styles.primaryButtonDisabled)
//                         }}
//                         onMouseEnter={(e) => {
//                             if (name.trim()) {
//                                 e.target.style.backgroundColor = '#1565c0';
//                             }
//                         }}
//                         onMouseLeave={(e) => {
//                             if (name.trim()) {
//                                 e.target.style.backgroundColor = '#1976d2';
//                             }
//                         }}
//                     >
//                         Submit
//                     </button>

//                     <button
//                         type="button"
//                         onClick={handleReset}
//                         style={{
//                             ...styles.button,
//                             ...styles.outlineButton
//                         }}
//                         onMouseEnter={(e) => {
//                             e.target.style.backgroundColor = '#f3f4f6';
//                         }}
//                         onMouseLeave={(e) => {
//                             e.target.style.backgroundColor = 'white';
//                         }}
//                     >
//                         Reset
//                     </button>
//                 </div>

//                 {/* Display Current Selection */}
//                 {name && (
//                     <div style={styles.preview}>
//                         <div style={styles.previewTitle}>Current Selection:</div>
//                         <div style={styles.previewText}>Name: {name}</div>
//                         <div style={styles.previewText}>
//                             Level: {level.charAt(0).toUpperCase() + level.slice(1)}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default LoginComponet