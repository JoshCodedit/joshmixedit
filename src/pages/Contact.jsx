export default function Contact() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white py-16">
      <h2 className="section-heading">Let's Work!</h2>
      <p className="text-lg text-center max-w-xl mb-2">
        Let's discuss your project. Fill out the form below, or email me at
      </p>
      <p className="text-center mb-6">
        <strong className="text-crimson">joshua.dixoncms@gmail.co.uk</strong>
      </p>
      <div className="p-8 w-full max-w-lg">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            aria-label="Name"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-crimson"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            aria-label="Email"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-crimson"
          />
          <textarea
            id="message"
            name="message"
            cols="60"
            rows="5"
            placeholder="Message"
            aria-label="Message"
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-crimson"
          />
          <button
            type="submit"
            className="bg-crimson self-end text-white px-4 py-2 rounded hover:bg-crimson-dark transition-colors font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
