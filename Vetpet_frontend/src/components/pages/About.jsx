import React from "react";

function About() {
  return (
    <div className="p-3 m-3" style={{ fontFamily: "sans-serif" }}>
      <h1 className="fw-bold mb-3">About Us</h1>
      <div className="mb-3">
        VetPet is an all-in-one platform created to make pet care easier, safer,
        and more convenient for everyone. We built this project with the goal of
        connecting pet lovers to everything they need in one trusted
        place-whether it's buying healthy pets, booking vet appointments, or
        getting professional grooming services. At VetPet, we believe pets are
        not just animals; they are family members who deserve love, attention,
        and proper care.
      </div>

      <div className="mb-4">
        We have a wide collection of healthy and verified pets available for
        adoption and purchase. Every pet listed on VetPet is carefully checked
        by professionals to ensure their health and safety. Our goal is to
        provide pet lovers with a secure and transparent way to find their
        perfect companion without any stress or uncertainty. We make sure that
        every transaction is smooth, safe, and filled with trust.
      </div>
      <h4 className="fw-bold ">People choose VetPet because:</h4>
      <ul className="mb-4">
        <li>We provide healthy, verified, and well-cared-for pets.</li>
        <li>
          We offer easy and reliable online appointments with qualified
          veterinarians.
        </li>
        <li>
          Our platform ensures transparent and ethical practices, promoting
          responsible pet ownership.
        </li>
        <li>
          We give guidance on pet care, diet, and vaccination, helping owners
          take the best care of their pets.
        </li>
        <li>
          We focus on trust, safety, and compassion in every interaction with
          pets and owners.
        </li>
      </ul>
      <h4 className="fw-bold">Our services include:</h4>
      <ul className="mb-4">
        <li>
          <strong>Buy Pets:</strong> A wide selection of puppies, kittens,
          birds, and small animals, all checked and verified for health and
          safety.
        </li>
        <li>
          <strong>Pet Grooming:</strong> Professional bathing, trimming, nail
          clipping, and styling in a safe, stress-free environment using
          pet-friendly products.
        </li>
        <li>
          <strong> Appointments:</strong> Easy online booking with experienced
          veterinarians, including reminders to ensure your pet never misses a
          checkup.
        </li>
      </ul>
      <div>
        We aim to build a caring community where pet owners can find everything
        they need in one place-from expert guidance and health support to
        grooming and adoption. At VetPet, our mission is to make every pet's
        life better and every owner's experience easier. Because for us, caring
        for pets means caring for family.
      </div>
      <div className="d-flex justify-content-center my-5">
        <a
          className="btn btn-info btn-lg rounded-pill px-3 py-2 text-white"
          href="/"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}

export default About;
