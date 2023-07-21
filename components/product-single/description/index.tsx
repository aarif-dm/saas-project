type ProductDescriptionType = {
  show: boolean;
};

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? "flex" : "none",
    "justify-content": show ? "center" : "none",
  };

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <h4>Product description</h4>
        <p>
          A travelX web application is a software platform designed to assist
          users in planning, organizing, and managing their travel experiences.
          <br />
          These applications offer a range of features and functionalities to
          simplify the travel process and enhance the overall experience for
          users.
          <br />A travelX web application serves as a one-stop solution for all
          your travel needs. It provides users with the ability to search and
          compare flights, hotels, car rentals, and other travel services from
          various providers. Users can input their travel preferences, such as
          destination, dates, budget, and any specific requirements, to receive
          personalized recommendations and options.
          <br />
          The application typically offers an user-friendly interface, allowing
          users to easily navigate through different sections and access the
          desired information.
          <br />
          It may include advanced search filters, allowing users to refine their
          search results based on factors like price range, star ratings,
          amenities, and more. Once users have found their desired flights and
          accommodations, they can proceed with requesting for approval directly
          through the application. Then approver can approve the request for the
          travel.
          <br />
          The web application is developed using HTML, CSS, Javascript, ReactJS,
          NextJs as frontend tools and PHP, Laravel, Yii as backend tools and
          for database it uses MySQL.
        </p>
      </div>
    </section>
  );
};

export default Description;
