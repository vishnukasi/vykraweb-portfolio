function openWhatsApp(data) {

    const phone = "917904753462"; // Example: 919876543210

    const message = ` *New Project Inquiry*

 *Name:* ${data.name}

 *Email:* ${data.email}

 *Phone:* ${data.phone}

 *Project:* ${data.project}

 *Budget:* ${data.budget}

 *Timeline:* ${data.timeline}

 *Message:*
${data.message}`;

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}