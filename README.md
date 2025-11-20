<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Guanyu Cai | Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'Noto Sans SC', 'sans-serif'],
            },
            colors: {
              primary: {
                50: '#f0f9ff',
                100: '#e0f2fe',
                200: '#bae6fd',
                300: '#7dd3fc',
                400: '#38bdf8',
                500: '#0ea5e9',
                600: '#0284c7',
                700: '#0369a1',
                800: '#075985',
                900: '#0c4a6e',
                950: '#082f49',
              }
            }
          },
        },
      }
    </script>
    <style>
      /* Custom scrollbar for a premium feel */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #0f172a; 
      }
      ::-webkit-scrollbar-thumb {
        background: #334155; 
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #475569; 
      }
      
      /* Typing cursor animation */
      .typing-cursor::after {
        content: '|';
        animation: blink 1s step-start infinite;
      }
      @keyframes blink {
        50% { opacity: 0; }
      }
    </style>
  <script type="importmap">
{
  "imports": {
    "react/": "https://aistudiocdn.com/react@^19.2.0/",
    "react": "https://aistudiocdn.com/react@^19.2.0",
    "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
    "lucide-react": "https://aistudiocdn.com/lucide-react@^0.554.0",
    "@google/genai": "https://aistudiocdn.com/@google/genai@^1.30.0"
  }
}
</script>
</head>
  <body class="bg-slate-950 text-slate-100 antialiased selection:bg-primary-500 selection:text-white">
    <div id="root"></div>
  </body>
</html>
