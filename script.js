 
body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

#calculator {
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

#display {
    width: 100%;
    height: 50px;
    background-color: #333;
    color: #fff;
    text-align: right;
    padding: 10px;
    font-size: 24px;
    border: none;
    border-radius: 5px;
}

button {
    width: 60px;
    height: 60px;
    margin: 5px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    background-color: #444;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #555;
}
