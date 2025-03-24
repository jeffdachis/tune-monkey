export default function CustomTune() {
  return (
    <main>
      <h1>Request a Custom Tune</h1>
      <form>
        <label>Motor Type: <input type="text" name="motor" /></label><br />
        <label>Controller: <input type="text" name="controller" /></label><br />
        <label>Battery Setup: <input type="text" name="battery" /></label><br />
        <label>Performance Goals: <textarea name="goals" /></label><br />
        <label>PAS? <input type="checkbox" name="pas" /></label><br />
        <label>Regen? <input type="checkbox" name="regen" /></label><br />
        <label>Field Weakening? <input type="checkbox" name="fw" /></label><br />
        <label>Thermal Derating? <input type="checkbox" name="thermal" /></label><br />
        <button type="submit">Submit Request</button>
      </form>
      <a href="/">Back to Home</a>
    </main>
  );
}