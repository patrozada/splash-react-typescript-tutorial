const Component = (props: { config: {} }) => {
  return <div />;
};

/**
 * Why can I pass _anything_ to config?
 */
// Because {} represents anything that is not undefined or null
<>
  <Component
    config={{
      foo: "bar",
      whatever: {},
    }}
  />
</>;
