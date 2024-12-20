export const Contact = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form className="grid grid-cols-1 gap-4">
        <input type="text" placeholder="Your Name" className="p-2 rounded-lg bg-gray-800 text-white" />
        <input type="email" placeholder="Your Email" className="p-2 rounded-lg bg-gray-800 text-white" />
        <textarea placeholder="Your Message" className="p-2 rounded-lg bg-gray-800 text-white h-32"></textarea>
        <button type="submit" className="bg-teal-500 py-2 px-4 rounded-lg shadow-lg hover:bg-teal-400">Send Message</button>
      </form>
    </div>
  );