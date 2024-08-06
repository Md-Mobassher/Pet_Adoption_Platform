# Pet Adoption Platform

## Deployment

- **Live Link**: [Pet Adoption Platform](https://pet-adoption-platform-sand.vercel.app)

## Technologies Used

- **Next.js**: React framework for building server-side rendered and static web applications.
- **TypeScript**: Typed superset of JavaScript for enhanced developer productivity and code maintainability.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs with ease.
- **Next UI**: UI components library for Next.js applications.

## Getting Started

To get a local copy of the project up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Md-Mobassher/Pet_Adoption_Platform.git
   ```

2. Install dependencies:

   ```bash
   cd Pet_Adoption_Platform
   yarn
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add necessary environment variables.

4. Start the development server:

   ```bash
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Login Credentials

Use the following credentials to log in:

1. **Admin**:

   - **Email**: admin@gmail.com
   - **Password**: Admin123

2. **User**:
   - **Email**: user@gmail.com
   - **Password**: User123

## Full Feature Requirements for Pet Adoption Website

### 1. Home Page/Landing Page

**Header:**

- Logo: Prominently displayed website logo.
- Navigation Bar: Links to:
  - Home
  - About Us
  - Login/Register (if not logged in)
  - My Profile (if logged in)

**Searching Options:**

- Search Bar: Below the header, allowing users to search for pets by:
  - Pet type (e.g., dog, cat)
  - Breed
  - Age
  - Location

**Sidebar:** Additional filtering options such as:

- Size
- Gender
- Special needs

**Pet Lists (Based on search):**

- Pet Cards: Display a list of pets available for adoption in card format. Each card should include:
  - Pet's name
  - Photo
  - Brief description
  - Age
  - Breed
  - Location
  - Link to the full pet details page

**Extra Sections (Optional):**

- Success Stories: Testimonials from people who have adopted pets through the website.
- Adoption Tips: Advice and guidelines for adopting a pet.

**Footer:**

- Contact Information: Email address, phone number, social media links.
- Copyright Information: Standard copyright details.
- Additional Links: Terms of Use, Privacy Policy, etc.

### 2. Login & Registration

**Login Form:**

- Fields:
  - Username or email address
  - Password

**Registration Form:**

- Fields:
  - Username
  - Email address
  - Password (with confirmation)

### 3. Pet Details Page (Private)

**Features:**

- Pet Information: Detailed information about the pet, including:
  - Multiple photos
  - Detailed description (temperament, special needs, etc.)
  - Age, breed, gender
  - Health status (vaccinated, spayed/neutered)
  - Current location
- Adoption Request Button: Button to initiate an adoption request (redirects to adoption request page).
- Accessible only to logged-in users.

### 4. Pet Adoption Request Page

**Features:**

- Form Fields:
  - User's contact information (prefilled from profile if possible)
  - Additional information
  - Agreement to terms and conditions
- Submit Button: Submit the adoption request.

### 5. My Profile

**User Account Information:**

- Edit Profile: Options to edit username and email.
- Change Password: Link to Change Password section.

**Subsections:**

- **5.1 My Adopted Pets:**
  - List of pets the user has adopted.
  - Details for each pet:
    - Pet's name
    - Photo
    - Adoption date
    - Link to the pet details page (if available)
- **5.2 Change Password Section:**
  - Fields:
    - Current password
    - New password (with confirmation)

### 6. Admin Dashboard

**User Management:**

- View and Manage User Accounts: Activate/deactivate accounts, edit roles.

**Pet Management:**

- Add New Pets: Only admins can add pets to the system.
  - Form Fields:
    - Pet's name
    - Photos
    - Detailed description
    - Age, breed, gender
    - Health status
    - Current location
- Edit/Remove Pets: Admins can edit or remove pet listings.

### 7. About Us Page

**Content:**

- Mission Statement: Brief description of the website's purpose and mission.
- Team Information: Information about the team behind the website.
- Contact Information: Email address, phone number, social media links.

### Additional Considerations

- **Secure Login System:** Implement password hashing to ensure secure login.
- **Responsive Design:** Ensure the website is accessible and user-friendly on various devices (desktops, tablets, mobile phones).

## Contributing

Contributions are welcome! If you find any bugs or want to suggest improvements, please open an issue or create a pull request.

## License

MIT License

## More Projects and Information

👉 Explore additional projects and find out more about my work on my portfolio website: [Md Mobassher Hossain](https://mobassher.vercel.app)
