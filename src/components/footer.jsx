const Footer = () => {
  return (
    // ketika md dia kecil row kebawah kl pas besar dia col
    <div className="mt-32 py-4 flex md:flex-row flex-col justify-between items-center">
      <h1 className="text-2xl font-bold">BMI Calculator</h1>

      <div className="flex items-center gap-3 ">
        <label htmlFor="">BMI Calculator by Arnold Pramudita 2025</label>
      </div>
    </div>
  );
};

export default Footer;
