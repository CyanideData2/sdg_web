import Container from "./container";

export default function Video() {
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto mb-20 overflow-hidden rounded-2xl ">
        <div
          className="relative bg-primary-color cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-primary-color to-green-100">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/pVVXMdwYRtE?si=MWYHdbO0Y4rW4jif&amp;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </Container>
  );
}
