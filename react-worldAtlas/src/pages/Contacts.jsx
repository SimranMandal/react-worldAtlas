export const Contacts = () => {

    /* FormData.entries() returns an interator of key-value pairs from the form data.Each key corresponds to a form input's name, and the value corresponds to the input's value.
    Ex: If your form has field like <input name="username" value="Simran"/> , it will return ['username', 'Simran'] .

    Object.fromEntries(formData.entries());
    Object.fromEntries() is a method that converts an iteratable key-value pairs (like the one returneed by forData.entries()) into a plain JS object.

    */

    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
        
    };

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
    
            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input type="text" 
                    className="form-control"
                    required
                    autoComplete="off"
                    placeholder="Enter your name"
                    name="username"
                    />

                    <input type="email" 
                    className="form-control"
                    required
                    autoComplete="off"
                    placeholder="Enter your email"
                    name="email"
                    />

                    <textarea 
                    className="form-control"
                    required
                    rows="10"
                    autoComplete="off"
                    placeholder="Enter your message"
                    name="message"
                    ></textarea>

                    <button type="submit" value="send">Send</button>

                </form>
            </div>
    
        </section>
    )
    
    
};