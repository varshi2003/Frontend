// Define the form elements array
const formElements = [
    {
        tag: "form",
        attributes: { id: "dynamic-form", class: "form-container" },
        children: [
            {
                tag: "div",
                attributes: { class: "form-row" },
                children: [
                    {
                        tag: "label",
                        text: "Name",
                        attributes: { for: "title" },
                    },
                    {
                        tag: "select",
                        attributes: { id: "title", name: "title", required: true },
                        children: [
                            { tag: "option", text: "Mr", attributes: { value: "mr" } },
                            { tag: "option", text: "Mrs", attributes: { value: "mrs" } },
                        ],
                    },
                    {
                        tag: "input",
                        attributes: {
                            type: "text",
                            id: "first-name",
                            name: "first-name",
                            placeholder: "First Name",
                            required: true,
                        },
                    },
                    {
                        tag: "input",
                        attributes: {
                            type: "text",
                            id: "last-name",
                            name: "last-name",
                            placeholder: "Last Name",
                            required: true,
                        },
                    },
                ],
            },
            {
                tag: "div",
                attributes: { class: "form-row" },
                children: [
                    {
                        tag: "label",
                        text: "Date of Birth",
                        attributes: { for: "dob" },
                    },
                    {
                        tag: "input",
                        attributes: {
                            type: "date",
                            id: "dob",
                            name: "dob",
                            required: true,
                        },
                    },
                ],
            },
            {
                tag: "div",
                attributes: { class: "form-row" },
                children: [
                    { tag: "label", text: "Address", attributes: { for: "address" } },
                    {
                        tag: "input",
                        attributes: {
                            type: "text",
                            id: "street",
                            name: "street",
                            placeholder: "Street Name",
                            required: true,
                        },
                    },
                    {
                        tag: "input",
                        attributes: {
                            type: "text",
                            id: "pincode",
                            name: "pincode",
                            placeholder: "Pincode",
                            required: true,
                            pattern: "\\d{6}",
                        },
                    },
                    {
                        tag: "input",
                        attributes: {
                            type: "text",
                            id: "city",
                            name: "city",
                            placeholder: "City",
                            required: true,
                        },
                    },
                    {
                        tag: "select",
                        attributes: { id: "country", name: "country", required: true },
                        children: [
                            { tag: "option", text: "India", attributes: { value: "india" } },
                            { tag: "option", text: "USA", attributes: { value: "usa" } },
                            { tag: "option", text: "Canada", attributes: { value: "canada" } },
                        ],
                    },
                ],
            },
            {
                tag: "div",
                attributes: { class: "form-row" },
                children: [
                    { tag: "label", text: "Gender", attributes: { for: "gender" } },
                    {
                        tag: "input",
                        attributes: {
                            type: "radio",
                            id: "male",
                            name: "gender",
                            value: "male",
                            required: true,
                        },
                    },
                    { tag: "label", text: "Male", attributes: { for: "male" } },
                    {
                        tag: "input",
                        attributes: {
                            type: "radio",
                            id: "female",
                            name: "gender",
                            value: "female",
                            required: true,
                        },
                    },
                    { tag: "label", text: "Female", attributes: { for: "female" } },
                ],
            },
            {
                tag: "div",
                attributes: { class: "form-row" },
                children: [
                    { tag: "label", text: "Email", attributes: { for: "email" } },
                    {
                        tag: "input",
                        attributes: {
                            type: "email",
                            id: "email",
                            name: "email",
                            placeholder: "Email Address",
                            required: true,
                        },
                    },
                ],
            },
            {
                tag: "div",
                attributes: { class: "form-row" },
                children: [
                    { tag: "label", text: "Phone", attributes: { for: "phone" } },
                    {
                        tag: "input",
                        attributes: {
                            type: "tel",
                            id: "phone",
                            name: "phone",
                            placeholder: "Phone Number",
                            required: true,
                            pattern: "\\d{10}",
                        },
                    },
                ],
            },
            {
                tag: "div",
                attributes: { class: "form-row" },
                children: [
                    {
                        tag: "button",
                        text: "Submit",
                        attributes: { type: "submit", class: "submit-btn" },
                    },
                ],
            },
        ],
    },
];

// Recursive function to create form elements
function createForm(elements, parentId = "body") {
    elements.forEach((element) => {
        const el = document.createElement(element.tag);

        // Set attributes
        if (element.attributes) {
            Object.entries(element.attributes).forEach(([key, value]) => {
                el.setAttribute(key, value);
            });
        }

        // Set text content
        if (element.text) {
            el.textContent = element.text;
        }

        // Add children recursively
        if (element.children) {
            createForm(element.children, el);
        }

        // Append to parent
        const parent =
            parentId instanceof HTMLElement
                ? parentId
                : document.getElementById(parentId) || document.body;
        parent.appendChild(el);
    });
}

// Ensure DOM is fully loaded before building the form
document.addEventListener("DOMContentLoaded", () => {
    createForm(formElements);
    console.log("Form has been successfully created!");
});
