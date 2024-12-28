import {
  Card,
  CardTitle,
  CardContent,
  FeaturedCard,
  ThemedCard,
  InteractiveCard,
} from "./components/styled/Card";

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Styled components</p>

      <Card>
        <CardTitle>Card Title</CardTitle>
        <CardContent>This is some card content.</CardContent>
      </Card>

      <FeaturedCard>
        <CardTitle>Featured Card Title</CardTitle>
        <CardContent>This is some featured card content.</CardContent>
      </FeaturedCard>
      <ThemedCard dark="true">
        <CardTitle>Dark Themed Card Title</CardTitle>
        <CardContent>This is some dark themed card content.</CardContent>
      </ThemedCard>
      <ThemedCard>
        <CardTitle>Themed Card Title</CardTitle>
        <CardContent>This is some light themed card content.</CardContent>
      </ThemedCard>
      <InteractiveCard>
        <CardTitle>Interactive Card Title</CardTitle>
        <CardContent>This is some interactive card content.</CardContent>
      </InteractiveCard>
    </div>
  );
};

export default App;
