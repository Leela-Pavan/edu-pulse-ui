import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Calendar, 
  Clock, 
  Target,
  Download,
  BarChart3,
  PieChart,
  Activity,
  BookOpen,
  Award,
  CheckCircle
} from "lucide-react";

const mockAttendanceData = [
  { month: "Jan", percentage: 92 },
  { month: "Feb", percentage: 88 },
  { month: "Mar", percentage: 95 },
  { month: "Apr", percentage: 87 },
  { month: "May", percentage: 91 },
];

const subjectAttendance = [
  { subject: "Mathematics", percentage: 94, color: "bg-blue-500" },
  { subject: "Physics", percentage: 89, color: "bg-green-500" },
  { subject: "Computer Science", percentage: 96, color: "bg-purple-500" },
  { subject: "English", percentage: 82, color: "bg-orange-500" },
  { subject: "Biology", percentage: 91, color: "bg-pink-500" },
];

const productivityMetrics = [
  { label: "Tasks Completed", value: 142, total: 168, percentage: 85 },
  { label: "Study Hours", value: 48, total: 60, percentage: 80 },
  { label: "Projects Finished", value: 8, total: 10, percentage: 80 },
];

export default function Reports() {
  const overallAttendance = 91;
  const averageProductivity = 82;

  return (
    <AppLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Reports & Insights</h1>
              <p className="text-muted-foreground">Track your academic progress and productivity</p>
            </div>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{overallAttendance}%</div>
                <div className="text-sm text-muted-foreground">Overall Attendance</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-success/10 to-success/5">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-success">{averageProductivity}%</div>
                <div className="text-sm text-muted-foreground">Productivity Score</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Attendance Trend */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Attendance Trend</CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                Last 5 months
              </Badge>
            </div>
            <CardDescription>Your attendance percentage over time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {mockAttendanceData.map((data, index) => (
              <div key={data.month} className="flex items-center gap-4">
                <div className="w-12 text-sm font-medium text-muted-foreground">
                  {data.month}
                </div>
                <div className="flex-1">
                  <Progress value={data.percentage} className="h-3" />
                </div>
                <div className="w-12 text-sm font-semibold text-foreground text-right">
                  {data.percentage}%
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Subject-wise Attendance */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Subject-wise Attendance</CardTitle>
            </div>
            <CardDescription>Performance across different subjects</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {subjectAttendance.map((subject) => (
              <div key={subject.subject} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={cn("w-3 h-3 rounded-full", subject.color)} />
                    <span className="font-medium text-foreground">{subject.subject}</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {subject.percentage}%
                  </span>
                </div>
                <Progress value={subject.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Productivity Metrics */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Productivity Metrics</CardTitle>
            </div>
            <CardDescription>Your learning and task completion statistics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {productivityMetrics.map((metric) => (
              <div key={metric.label} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{metric.label}</span>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-foreground">
                      {metric.value}/{metric.total}
                    </span>
                    <div className="text-xs text-muted-foreground">
                      {metric.percentage}%
                    </div>
                  </div>
                </div>
                <Progress value={metric.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Weekly Summary */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">This Week's Summary</CardTitle>
            </div>
            <CardDescription>Key achievements and activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Classes Attended</span>
                </div>
                <div className="text-xl font-bold text-foreground">18/20</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium">Tasks Completed</span>
                </div>
                <div className="text-xl font-bold text-foreground">28/32</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-warning" />
                  <span className="text-sm font-medium">Study Hours</span>
                </div>
                <div className="text-xl font-bold text-foreground">12.5h</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium">Achievements</span>
                </div>
                <div className="text-xl font-bold text-foreground">3</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Goals & Recommendations */}
        <Card className="border-0 bg-gradient-to-r from-success/10 to-primary/10">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Recommendations</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                <span className="text-muted-foreground">
                  Great attendance in Computer Science! Keep it up.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-warning mt-0.5" />
                <span className="text-muted-foreground">
                  Focus on improving English attendance (currently 82%).
                </span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  You're on track to achieve 90%+ overall attendance this semester.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

// Import cn function
import { cn } from "@/lib/utils";