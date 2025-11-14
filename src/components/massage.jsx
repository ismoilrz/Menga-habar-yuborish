import "./massage.css"
import { useState } from "react";

const Massage = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSend = async () => {
        const token = "8337352834:AAEboty5WvYmfjyI-v0Wh3KJIS8J1bIgKhg";
        const chat_id = "6166055008"; // bu yerga sizning chat id kiradi
        const text = `👤 Ism: ${name}\n💬 Xabar: ${message}`;

        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(text)}`;

        try {
            const res = await fetch(url);
            if(res.ok){
                alert("Xabaringiz yuborildi! 🚀");
                setName("");
                setMessage("");
            } else {
                alert("Xatolik yuz berdi 😢");
            }
        } catch (err) {
            console.error(err);
            alert("Xatolik yuz berdi 😢");
        }
    }

    return (
        <main className="container">
            <h1>Men bilan bog'lanish uchun to'ldiring!</h1>
            <div className="inputs">
                <input 
                    type="text" 
                    placeholder="Ismingizni kiriting..." 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea 
                    name="Massage" 
                    placeholder="Habar yozish..." 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <button onClick={handleSend}>Yuborish</button>
        </main>
    )
}

export default Massage;
