import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Target, 
  TrendingUp,
  Book,
  Users,
  Bell
} from "lucide-react";

// Mock data
const todayClasses = [
  { id: 1, subject: "Mathematics", time: "09:00 - 10:30", room: "Room 101", status: "present", teacher: "Dr. Smith" },
  { id: 2, subject: "Physics", time: "11:00 - 12:30", room: "Lab 2", status: "present", teacher: "Prof. Johnson" },
  { id: 3, subject: "Computer Science", time: "14:00 - 15:30", room: "Room 205", status: "upcoming", teacher: "Dr. Brown" },
  { id: 4, subject: "English Literature", time: "16:00 - 17:30", room: "Room 301", status: "upcoming", teacher: "Ms. Davis" },
];

const suggestions = [
  { id: 1, title: "Review Physics Lab Notes", type: "study", duration: "30 min", priority: "high" },
  { id: 2, title: "Practice Math Problems", type: "homework", duration: "45 min", priority: "medium" },
  { id: 3, title: "Prepare CS Project Proposal", type: "project", duration: "60 min", priority: "high" },
];

export default function Dashboard() {
  const attendancePercentage = 87;
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <AppLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Good morning, Alex!</h1>
              <p className="text-muted-foreground">Ready for another productive day?</p>
            </div>
            <Button variant="floating" size="icon">
              <Bell size={20} />
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{attendancePercentage}%</div>
                <div className="text-sm text-muted-foreground">Attendance Rate</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-gradient-to-br from-success/10 to-success/5">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-success">4/6</div>
                <div className="text-sm text-muted-foreground">Tasks Completed</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Today's Schedule */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Today's Classes</CardTitle>
              </div>
              <Badge variant="outline" className="text-xs">
                {currentTime}
              </Badge>
            </div>
            <CardDescription>Your schedule for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {todayClasses.map((classItem) => (
              <div
                key={classItem.id}
                className={cn(
                  "flex items-center justify-between p-3 rounded-lg border transition-all duration-200",
                  classItem.status === "present" 
                    ? "bg-success/5 border-success/20" 
                    : classItem.status === "upcoming"
                    ? "bg-primary/5 border-primary/20"
                    : "bg-muted/5 border-border"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    classItem.status === "present" 
                      ? "bg-success/20" 
                      : "bg-primary/20"
                  )}>
                    <Book className={cn(
                      "w-5 h-5",
                      classItem.status === "present" 
                        ? "text-success" 
                        : "text-primary"
                    )} />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{classItem.subject}</div>
                    <div className="text-sm text-muted-foreground">
                      {classItem.time} • {classItem.room}
                    </div>
                    <div className="text-xs text-muted-foreground">{classItem.teacher}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {classItem.status === "present" ? (
                    <CheckCircle className="w-5 h-5 text-success" />
                  ) : classItem.status === "upcoming" ? (
                    <Clock className="w-5 h-5 text-primary" />
                  ) : (
                    <XCircle className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Productivity Suggestions */}
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Suggested Tasks</CardTitle>
            </div>
            <CardDescription>Make the most of your free time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="flex items-center justify-between p-3 rounded-lg border bg-surface-variant/50 hover:bg-surface-variant transition-colors duration-200"
              >
                <div className="space-y-1">
                  <div className="font-medium text-foreground">{suggestion.title}</div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{suggestion.duration}</span>
                    <Badge 
                      variant={suggestion.priority === "high" ? "destructive" : "secondary"}
                      className="text-xs px-2 py-0"
                    >
                      {suggestion.priority}
                    </Badge>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Start
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="gradient" size="lg" className="h-16 flex-col gap-1">
            <QrCode className="w-6 h-6" />
            <span className="text-sm">Mark Attendance</span>
          </Button>
          <Button variant="floating" size="lg" className="h-16 flex-col gap-1">
            <TrendingUp className="w-6 h-6" />
            <span className="text-sm">View Progress</span>
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}

// Import missing components and utils
import { cn } from "@/lib/utils";
import { QrCode } from "lucide-react";