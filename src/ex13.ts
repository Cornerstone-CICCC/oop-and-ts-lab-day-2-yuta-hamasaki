// Create a class decorator `InjectTimestamp` that adds a `timestamp` property to a class.
// The decorator should modify the class so that every time an instance is created, it has the current timestamp.

function InjectTimestamp() {
  
}

@InjectTimestamp
class Report {
  title: string

  constructor(t: string) {
    this.title = t
  }
}

// Expected output (when creating a new instance):
const report = new Report("Quarterly Report")
report.title // "Quarterly Report"
report.timestamp // current date and time