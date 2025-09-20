import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  QrCode, 
  Bluetooth, 
  Camera, 
  MapPin, 
  CheckCircle2,
  Clock,
  Wifi,
  Smartphone
} from "lucide-react";

const AttendanceMethodCard = ({ 
  icon: Icon, 
  title, 
  description, 
  isActive, 
  onClick 
}: {
  icon: any;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}) => (
  <Card 
    className={cn(
      "cursor-pointer transition-all duration-200 hover:shadow-md",
      isActive ? "border-primary shadow-glow bg-primary/5" : "border-border hover:border-primary/50"
    )}
    onClick={onClick}
  >
    <CardContent className="p-6 text-center space-y-4">
      <div className={cn(
        "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center",
        isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
      )}>
        <Icon size={28} />
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </CardContent>
  </Card>
);

export default function Attendance() {
  const [selectedMethod, setSelectedMethod] = useState<"qr" | "proximity" | "face">("qr");
  const [isMarking, setIsMarking] = useState(false);
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  const handleMarkAttendance = () => {
    setIsMarking(true);
    // Simulate attendance marking
    setTimeout(() => {
      setIsMarking(false);
      setAttendanceMarked(true);
      setTimeout(() => setAttendanceMarked(false), 3000);
    }, 2000);
  };

  const attendanceMethods = [
    {
      id: "qr" as const,
      icon: QrCode,
      title: "QR Code Scan",
      description: "Scan the classroom QR code",
    },
    {
      id: "proximity" as const,
      icon: Wifi,
      title: "Auto-Proximity",
      description: "Bluetooth/WiFi detection",
    },
    {
      id: "face" as const,
      icon: Camera,
      title: "Face Recognition",
      description: "AI-powered facial verification",
    },
  ];

  const recentAttendance = [
    { date: "Today", subject: "Mathematics", time: "09:15 AM", status: "present" },
    { date: "Today", subject: "Physics", time: "11:05 AM", status: "present" },
    { date: "Yesterday", subject: "Computer Science", time: "02:10 PM", status: "present" },
    { date: "Yesterday", subject: "English", time: "04:05 PM", status: "absent" },
  ];

  return (
    <AppLayout>
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">Attendance</h1>
          <p className="text-muted-foreground">Mark your presence quickly and easily</p>
        </div>

        {/* Success Message */}
        {attendanceMarked && (
          <Card className="border-success bg-success/5 animate-in slide-in-from-top duration-300">
            <CardContent className="p-4 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-success" />
              <div>
                <p className="font-medium text-success">Attendance Marked Successfully!</p>
                <p className="text-sm text-success/80">You're present for Mathematics - 09:00 AM</p>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="mark" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="mark">Mark Attendance</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="mark" className="space-y-6 mt-6">
            {/* Current Class Info */}
            <Card className="border-0 bg-gradient-to-r from-primary/10 to-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Mathematics</h3>
                    <p className="text-muted-foreground">Room 101 • Dr. Smith</p>
                    <p className="text-sm text-muted-foreground mt-1">09:00 - 10:30 AM</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      <Clock size={12} className="mr-1" />
                      Active
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-2">5 min remaining</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Attendance Methods */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Choose Attendance Method</h3>
              <div className="grid gap-4">
                {attendanceMethods.map((method) => (
                  <AttendanceMethodCard
                    key={method.id}
                    icon={method.icon}
                    title={method.title}
                    description={method.description}
                    isActive={selectedMethod === method.id}
                    onClick={() => setSelectedMethod(method.id)}
                  />
                ))}
              </div>
            </div>

            {/* Action Area */}
            {selectedMethod === "qr" && (
              <Card className="border-0 shadow-md">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-muted rounded-2xl flex items-center justify-center">
                    <QrCode size={64} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Ready to Scan</h4>
                    <p className="text-sm text-muted-foreground">Point your camera at the classroom QR code</p>
                  </div>
                  <Button 
                    variant="hero" 
                    size="xl" 
                    onClick={handleMarkAttendance}
                    disabled={isMarking}
                    className="w-full"
                  >
                    {isMarking ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Scanning...
                      </>
                    ) : (
                      <>
                        <Camera className="mr-2" size={20} />
                        Open Camera
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}

            {selectedMethod === "proximity" && (
              <Card className="border-0 shadow-md">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-muted rounded-2xl flex items-center justify-center">
                    <Wifi size={64} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Auto-Detection Active</h4>
                    <p className="text-sm text-muted-foreground">Looking for classroom signals...</p>
                  </div>
                  <Button 
                    variant="success" 
                    size="xl" 
                    onClick={handleMarkAttendance}
                    disabled={isMarking}
                    className="w-full"
                  >
                    {isMarking ? (
                      <>
                        <div className="w-4 h-4 border-2 border-success-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Detecting...
                      </>
                    ) : (
                      <>
                        <Bluetooth className="mr-2" size={20} />
                        Mark Present
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}

            {selectedMethod === "face" && (
              <Card className="border-0 shadow-md">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-muted rounded-2xl flex items-center justify-center">
                    <Camera size={64} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Face Recognition</h4>
                    <p className="text-sm text-muted-foreground">Position your face in the camera view</p>
                  </div>
                  <Button 
                    variant="gradient" 
                    size="xl" 
                    onClick={handleMarkAttendance}
                    disabled={isMarking}
                    className="w-full"
                  >
                    {isMarking ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <Smartphone className="mr-2" size={20} />
                        Start Verification
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="history" className="space-y-4 mt-6">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Recent Attendance</CardTitle>
                <CardDescription>Your attendance history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAttendance.map((record, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-surface-variant/50">
                    <div className="space-y-1">
                      <div className="font-medium text-foreground">{record.subject}</div>
                      <div className="text-sm text-muted-foreground">
                        {record.date} • {record.time}
                      </div>
                    </div>
                    <Badge 
                      variant={record.status === "present" ? "default" : "destructive"}
                      className={record.status === "present" ? "bg-success text-success-foreground" : ""}
                    >
                      {record.status === "present" ? "Present" : "Absent"}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}

// Import cn function
import { cn } from "@/lib/utils";