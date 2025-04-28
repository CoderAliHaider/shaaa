import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-[#FEF1DE] py-6">
      <div className="container mx-auto text-center">
        <p className="text-[#3C2013] text-sm">
          © {new Date().getFullYear()} Golden Brown. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-[#3C2013] hover:underline">Privacy Policy</a>
          <a href="#" className="text-[#3C2013] hover:underline">Terms of Service</a>
          <a href="#" className="text-[#3C2013] hover:underline">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;