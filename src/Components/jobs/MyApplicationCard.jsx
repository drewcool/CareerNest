import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function MyApplicationCard({ app }) {
  return (
    <Card key={app.id} className="shadow-sm">
      <CardHeader className="flex items-center gap-4">
        <img
          src={app.company_logo || "/default-logo.png"}
          alt={app.company_name || "Company"}
          className="w-12 h-12 object-cover rounded-md"
        />
        <div>
          <CardTitle className="text-base">{app.company_name || "Company Name"}</CardTitle>
          <p className="text-sm text-muted-foreground">Job ID: {app.job_id}</p>
        </div>
        <Badge variant="outline" className="ml-auto capitalize">
          {app.status}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className="text-sm text-gray-600">
          <strong>Applicant:</strong> {app.applicant_name} ({app.applicant_email})
        </p>
        <p className="text-sm text-gray-600">
          <strong>Phone:</strong> {app.phone} | <strong>Experience:</strong> {app.experience} yrs
        </p>
        <p className="text-sm mt-2">
          <strong>Cover Letter:</strong>
        </p>
        <p className="text-sm text-gray-700 whitespace-pre-line">{app.cover_letter}</p>
        {app.resume_url && (
          <a
            href={app.resume_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm underline"
          >
            View Resume
          </a>
        )}
      </CardContent>
    </Card>
  );
}
