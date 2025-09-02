import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Card,
  Table,
  ListGroup,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [sidebaropen, setSidebaropen] = useState(true);
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  // ✅ Logout function
  const hl = () => {
    localStorage.removeItem("isloggedin");
    localStorage.removeItem("user");
    navigate("/", { replace: true });
    window.location.reload(); // reset UI state
  };

  // ✅ Latest Updates
  const [message, setMessage] = useState([]);
  const samplemessage = [
    "New course on React Native is live",
    "50% discount on Node.js Mastery",
    "MongoDB Advanced batch starting soon",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randommsg =
        samplemessage[Math.floor(Math.random() * samplemessage.length)];
      setMessage((prev) => [...prev, randommsg]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const togglesidebar = () => {
    setSidebaropen(!sidebaropen);
  };

  // ✅ Recent Enrollment Data
  const enrollments = [
    {
      id: 1,
      student: "Raj Santra",
      course: "React Basic",
      date: "2025-08-20",
      status: "Active",
    },
    {
      id: 2,
      student: "Anita Das",
      course: "Node.js Advanced",
      date: "2025-08-21",
      status: "Pending",
    },
    {
      id: 3,
      student: "Sourav Paul",
      course: "MongoDB Mastery",
      date: "2025-08-22",
      status: "Completed",
    },
  ];

  return (
    <>
      <Container fluid className="mt-3 m-0 p-0">
        {/* Top Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg" className="px-3">
          <Navbar.Brand href="">E-learning</Navbar.Brand>
          <Button
            variant="outline-light"
            className="ms-auto d-lg-none"
            onClick={togglesidebar}
          >
            {sidebaropen ? "Close" : "Menu"}
          </Button>
        </Navbar>

        <Row>
          {/* Sidebar */}
          {sidebaropen && (
            <Col
              lg={2}
              className="bg-dark text-white min-vh-100 d-none d-lg-block p-3"
              style={{ position: "sticky", top: 0 }}
            >
              <h5 className="mb-4">Menu</h5>
              <Nav.Link href="" className="text-white">
                Dashboard
              </Nav.Link>
              <Nav.Link href="" className="text-white">
                Courses
              </Nav.Link>
              <Nav.Link href="" className="text-white">
                Students
              </Nav.Link>
              <Nav.Link href="" className="text-white">
                Reports
              </Nav.Link>
              <Nav.Link href="" className="text-white">
                Settings
              </Nav.Link>
              <Button variant="danger" className="mt-3" onClick={hl}>
                Logout
              </Button>
            </Col>
          )}

          {/* Main Content */}
          <Col lg={sidebaropen ? 10 : 12} className="p-4">
            <h3 className="mb-4">Welcome, {user ? user : "Guest"}</h3>
            <p className="text-success">You are logged in successfully with OTP</p>

            {/* Stats Section */}
            <Row className="mb-4">
              <Col md={4} sm={6} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>Total Courses</Card.Title>
                    <Card.Text>24</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} sm={6} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>Active Students</Card.Title>
                    <Card.Text>120</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} sm={6} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>Revenue</Card.Title>
                    <Card.Text>$5,400</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Latest Updates */}
              <Col md={4} sm={6} className="mb-3">
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title>Latest Updates</Card.Title>
                    <ListGroup variant="flush">
                      {message.length > 0 ? (
                        message.map((msg, index) => (
                          <ListGroup.Item key={index}>{msg}</ListGroup.Item>
                        ))
                      ) : (
                        <ListGroup.Item>No updates yet</ListGroup.Item>
                      )}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Recent Enrollments */}
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Recent Enrollments</Card.Title>
                <Table striped bordered hover responsive className="mt-3">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Student</th>
                      <th>Course</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrollments.map((e) => (
                      <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.student}</td>
                        <td>{e.course}</td>
                        <td>{e.date}</td>
                        <td>{e.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;