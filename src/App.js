import { HashRouter, Route, Routes } from "react-router-dom";
import BlogPage from "./components/blog_page";
import CategoryPage from "./components/category_page";
import ContactUsPage from "./components/contact_us_page";
import CreateBlogPage from "./components/create_blog";
import HomePage from "./components/home_page";
import ProfilePage from "./components/profile_page";
import SignUp from "./components/sign_up/sign_up_page";
import SignIn from "./components/sign_in/sign_in_page";
import "./styles/index.css";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/signUp' element={<SignUp />} />
        <Route exact path='/signIn' element={<SignIn />} />
        <Route exact path='/:blogID/blog' element={<BlogPage />} />
        <Route exact path='/createBlog' element={<CreateBlogPage />} />
        <Route exact path='/home' element={<HomePage />} />
        <Route exact path='/category/:category' element={<CategoryPage />} />
        <Route exact path='/profile' element={<ProfilePage />} />
        <Route exact path='/contactUs' element={<ContactUsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
