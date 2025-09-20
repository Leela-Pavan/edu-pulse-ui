import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle2, 
  Clock, 
  Star, 
  Book, 
  Code, 
  FileText,
  Target,
  Calendar,
  Timer,
  TrendingUp,
  Award
} from "lucide-react";

interface Task {
  id: number;
  title: string;
  type: "study" | "homework" | "project" | "skill";
  subject: string;
  duration: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
  description: string;
  deadline?: string;
}

const tasks: Task[] = [
  {
    id: 1,
    title: "Review Physics Lab Notes",
    type: "study",
    subject: "Physics",
    duration: "30 min",
    priority: "high",
    completed: false,
    description: "Go through yesterday's lab experiment notes and formulas",
    deadline: "Today"
  },
  {
    id: 2,
    title: "Complete Math Problem Set #12",
    type: "homework",
    subject: "Mathematics",
    duration: "45 min",
    priority: "high",
    completed: false,
    description: "Solve problems 1-20 from chapter 8",
    deadline: "Tomorrow"
  },
  {
    id: 3,
    title: "Practice Python Coding",
    type: "skill",
    subject: "Computer Science",
    duration: "60 min",
    priority: "medium",
    completed: true,
    description: "Work on data structures and algorithms"
  },
  {
    id: 4,
    title: "Prepare Literature Essay Outline",
    type: "project",
    subject: "English",
    duration: "40 min",
    priority: "medium",
    completed: false,
    description: "Create detailed outline for upcoming essay on modern poetry"
  },
  {
    id: 5,
    title: "Read Chapter 9: Cell Biology",
    type: "study",
    subject: "Biology",
    duration: "35 min",
    priority: "low",
    completed: true,
    description: "Understanding cellular processes and mitosis"
  },
];

const TaskCard = ({ task, onToggleComplete, onSnooze }: {
  task: Task;
  onToggleComplete: (id: number) => void;
  onSnooze: (id: number) => void;
}) => {
  const getTypeIcon = () => {
    switch (task.type) {
      case "study": return <Book className="w-4 h-4" />;
      case "homework": return <FileText className="w-4 h-4" />;
      case "project": return <Target className="w-4 h-4" />;
      case "skill": return <Code className="w-4 h-4" />;
      default: return <Book className="w-4 h-4" />;
    }
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className={cn(
      "transition-all duration-200 hover:shadow-md",
      task.completed ? "bg-success/5 border-success/20" : "border-border hover:border-primary/50"
    )}>
      <CardContent className="p-4 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3 flex-1">
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center mt-1",
              task.completed ? "bg-success/20" : "bg-primary/20"
            )}>
              {getTypeIcon()}
            </div>
            <div className="flex-1 space-y-2">
              <div className="space-y-1">
                <h3 className={cn(
                  "font-medium",
                  task.completed ? "line-through text-muted-foreground" : "text-foreground"
                )}>
                  {task.title}
                </h3>
                <p className="text-sm text-muted-foreground">{task.description}</p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="outline" className="text-xs">
                  {task.subject}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <Timer className="w-3 h-3 mr-1" />
                  {task.duration}
                </Badge>
                <Badge 
                  variant="outline" 
                  className={cn("text-xs", getPriorityColor())}
                >
                  <Star className="w-3 h-3 mr-1" />
                  {task.priority}
                </Badge>
                {task.deadline && (
                  <Badge variant="outline" className="text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {task.deadline}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          {!task.completed ? (
            <>
              <Button 
                variant="success" 
                size="sm" 
                onClick={() => onToggleComplete(task.id)}
                className="flex-1"
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Mark Done
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onSnooze(task.id)}
              >
                <Clock className="w-4 h-4 mr-2" />
                Snooze
              </Button>
            </>
          ) : (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => onToggleComplete(task.id)}
              className="flex-1"
            >
              <CheckCircle2 className="w-4 h-4 mr-2 text-success" />
              Completed
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default function Tasks() {
  const [taskList, setTaskList] = useState(tasks);
  
  const completedTasks = taskList.filter(task => task.completed).length;
  const totalTasks = taskList.length;
  const completionRate = Math.round((completedTasks / totalTasks) * 100);

  const handleToggleComplete = (taskId: number) => {
    setTaskList(prev => prev.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleSnooze = (taskId: number) => {
    // In a real app, this would reschedule the task
    console.log("Snoozed task:", taskId);
  };

  const pendingTasks = taskList.filter(task => !task.completed);
  const completedTasksList = taskList.filter(task => task.completed);

  return (
    <AppLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Tasks & Suggestions</h1>
            <p className="text-muted-foreground">AI-powered productivity recommendations</p>
          </div>

          {/* Progress Overview */}
          <Card className="border-0 bg-gradient-to-r from-primary/10 to-success/10">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Today's Progress</h3>
                  <p className="text-sm text-muted-foreground">{completedTasks} of {totalTasks} tasks completed</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{completionRate}%</div>
                  <div className="text-xs text-muted-foreground">completion rate</div>
                </div>
              </div>
              <Progress value={completionRate} className="h-2" />
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="border-0 bg-surface">
              <CardContent className="p-4 text-center">
                <div className="text-lg font-bold text-foreground">{pendingTasks.length}</div>
                <div className="text-xs text-muted-foreground">Pending</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-surface">
              <CardContent className="p-4 text-center">
                <div className="text-lg font-bold text-success">{completedTasks}</div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-surface">
              <CardContent className="p-4 text-center">
                <div className="text-lg font-bold text-warning">2h 45m</div>
                <div className="text-xs text-muted-foreground">Est. Time</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pending Tasks */}
        {pendingTasks.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Suggested Tasks</h2>
              <Badge variant="outline" className="text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                AI Optimized
              </Badge>
            </div>
            <div className="space-y-4">
              {pendingTasks
                .sort((a, b) => {
                  const priorityOrder = { high: 3, medium: 2, low: 1 };
                  return priorityOrder[b.priority] - priorityOrder[a.priority];
                })
                .map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onToggleComplete={handleToggleComplete}
                    onSnooze={handleSnooze}
                  />
                ))}
            </div>
          </div>
        )}

        {/* Completed Tasks */}
        {completedTasksList.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-foreground">Completed Today</h2>
              <Award className="w-5 h-5 text-success" />
            </div>
            <div className="space-y-4">
              {completedTasksList.map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggleComplete={handleToggleComplete}
                  onSnooze={handleSnooze}
                />
              ))}
            </div>
          </div>
        )}

        {/* Achievement Message */}
        {completionRate >= 80 && (
          <Card className="border-success bg-gradient-to-r from-success/10 to-success/5">
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 text-success mx-auto mb-3" />
              <h3 className="font-semibold text-success mb-2">Excellent Progress!</h3>
              <p className="text-sm text-success/80">You're crushing your goals today! Keep up the great work.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}

// Import cn function
import { cn } from "@/lib/utils";