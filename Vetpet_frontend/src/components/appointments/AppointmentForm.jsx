import React, { useEffect, useState } from "react";
import {
  getDoctors,
  getPets,
  getTreatments,
  createAppointment,
} from "../../appointmentApi.js";
import { Form, Button, Container, Row, Col, Alert, Card, Spinner } from "react-bootstrap";

const AppointmentForm = () => {
  const [pets, setPets] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("success");

  const [formData, setFormData] = useState({
    pet: "",
    doctor: "",
    treatment: "",
    date: "",
    time: "",
    notes: "",
  });

  // Fetch dropdown data for pets, doctors, treatments
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const [petData, doctorData, treatmentData] = await Promise.all([
          getPets(),
          getDoctors(),
          getTreatments(),
        ]);
        setPets(petData);
        setDoctors(doctorData);
        setTreatments(treatmentData);
      } catch (error) {
        console.error("Error loading dropdown data:", error);
        setMessage("⚠️ Failed to load data. Please refresh.");
        setVariant("danger");
      } finally {
        setLoading(false);
      }
    };

    fetchDropdownData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAppointment(formData);
      setMessage("✅ Appointment booked successfully!");
      setVariant("success");

      // Reset form
      setFormData({
        pet: "",
        doctor: "",
        treatment: "",
        date: "",
        time: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error booking appointment:", error);
      setMessage("❌ Failed to book appointment. Please try again.");
      setVariant("danger");
    }
  };

  // Show loading spinner
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status" />
        <p className="mt-3 text-muted">Loading form data...</p>
      </div>
    );
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg p-4">
            <Card.Body>
              <h3 className="text-center mb-4 text-primary">
                🩺 Book a Veterinary Appointment
              </h3>

              {message && <Alert variant={variant}>{message}</Alert>}

              <Form onSubmit={handleSubmit}>
                {/* Pet Selection */}
                <Form.Group className="mb-3">
                  <Form.Label>Pet</Form.Label>
                  <Form.Select
                    name="pet"
                    value={formData.pet}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your pet</option>
                    {pets.map((pet) => (
                      <option key={pet.id} value={pet.id}>
                        {pet.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {/* Doctor Selection */}
                <Form.Group className="mb-3">
                  <Form.Label>Doctor</Form.Label>
                  <Form.Select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a doctor</option>
                    {doctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {/* Treatment Selection */}
                <Form.Group className="mb-3">
                  <Form.Label>Treatment</Form.Label>
                  <Form.Select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a treatment</option>
                    {treatments.map((treat) => (
                      <option key={treat.id} value={treat.id}>
                        {treat.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>

                {/* Date and Time */}
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Notes */}
                <Form.Group className="mb-3">
                  <Form.Label>Notes</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special concerns or notes?"
                  />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="primary" size="lg" type="submit">
                    Book Appointment
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentForm;
