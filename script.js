// script.js

document.addEventListener('DOMContentLoaded', () => {
    const roomList = document.getElementById('room-list');
    const rooms = [
        { name: 'Deluxe Room', price: '₱1000/night', description: 'A luxurious room with a king-sized bed.' },
        { name: 'Standard Room', price: '₱550/night', description: 'A comfortable room with a queen-sized bed.' },
        { name: 'Suite', price: '₱1500/night', description: 'An elegant suite with a separate living area.' },
    ];

    rooms.forEach(room => {
        const roomDiv = document.createElement('div');
        roomDiv.classList.add('room');
        roomDiv.innerHTML = `
            <h3>${room.name}</h3>
            <p>${room.price}</p>
            <p>${room.description}</p>
        `;
        roomList.appendChild(roomDiv);
    });

    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;

        if (name && email && checkin && checkout) {
            alert(`Booking Confirmed!\nName: ${name}\nEmail: ${email}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`);
            bookingForm.reset();
        } else {
            alert('Please fill in all the fields.');
        }
    });
});
