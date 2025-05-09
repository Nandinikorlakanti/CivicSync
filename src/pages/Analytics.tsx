
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
<<<<<<< HEAD
import { motion } from "framer-motion";
=======
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
<<<<<<< HEAD
import Layout from "@/components/Layout";
=======
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
import CategoryDistribution from "@/components/analytics/CategoryDistribution";
import TemporalAnalysis from "@/components/analytics/TemporalAnalysis";
import TopVotedIssues from "@/components/analytics/TopVotedIssues";
import MapView from "@/components/analytics/MapView";
import { useToast } from "@/components/ui/use-toast";
import { IssueCategory, IssueStatus } from "@/types";
import { getCategoryDistribution, getTemporalAnalysis, getTopVotedIssues, getIssuesForMap } from "@/lib/supabase-data";
import { useQuery } from "@tanstack/react-query";
<<<<<<< HEAD
import { ChartLine, ChevronDown, BarChart3, MapPin } from "lucide-react";
=======
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570

// Type definitions for the data structures
interface CategoryData {
  category: IssueCategory;
  count: number;
}

interface TemporalData {
  date: string;
  count: number;
}

interface TopVotedIssue {
  id: string;
  title: string;
  votes: number;
  category: IssueCategory;
  status: IssueStatus;
}

interface MapIssue {
  id: string;
  title: string;
  lat: number;
  lng: number;
  category: IssueCategory;
  status: IssueStatus;
  votes: number;
}

interface LocationState {
  issueId?: string;
  showMap?: boolean;
}

<<<<<<< HEAD
// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1
    } 
  }
};

=======
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
const Analytics = () => {
  const location = useLocation();
  const state = location.state as LocationState | null;
  const showMap = state?.showMap || false;
  const focusIssueId = state?.issueId || null;
  
  const [activeTab, setActiveTab] = useState(showMap ? "map" : "overview");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { toast } = useToast();

  // Use react-query to fetch data
  const { data: categoryData = [], isLoading: isCategoryLoading, error: categoryError } = useQuery({
    queryKey: ['categoryDistribution'],
    queryFn: getCategoryDistribution
  });

  const { data: temporalData = [], isLoading: isTemporalLoading, error: temporalError } = useQuery({
    queryKey: ['temporalAnalysis'],
    queryFn: () => getTemporalAnalysis(7)
  });

  const { data: topVotedIssues = [], isLoading: isTopVotedLoading, error: topVotedError } = useQuery({
    queryKey: ['topVotedIssues'],
    queryFn: () => getTopVotedIssues(5)
  });

  const { data: mapIssues = [], isLoading: isMapLoading, error: mapError } = useQuery({
    queryKey: ['mapIssues'],
    queryFn: getIssuesForMap
  });

  // Handle errors
  useEffect(() => {
    if (categoryError) {
      toast({
        title: "Error loading category data",
        description: "Could not load category distribution. Please try again later.",
        variant: "destructive",
      });
    }

    if (temporalError) {
      toast({
        title: "Error loading temporal data",
        description: "Could not load temporal analysis. Please try again later.",
        variant: "destructive",
      });
    }

    if (topVotedError) {
      toast({
        title: "Error loading top voted issues",
        description: "Could not load top voted issues. Please try again later.",
        variant: "destructive",
      });
    }

    if (mapError) {
      toast({
        title: "Error loading map data",
        description: "Could not load map data. Please try again later.",
        variant: "destructive",
      });
    }
  }, [categoryError, temporalError, topVotedError, mapError, toast]);

  const isLoading = isCategoryLoading || isTemporalLoading || isTopVotedLoading || isMapLoading;

  // Handle category filtering
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  return (
<<<<<<< HEAD
    <Layout fullWidth className="py-8 md:py-12 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Analytics Dashboard
          </motion.h1>
          <motion.p 
            className="text-muted-foreground mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore and analyze civic issues across the community
          </motion.p>
        </motion.div>

        <Tabs 
          defaultValue="overview" 
          value={activeTab} 
          onValueChange={setActiveTab} 
          className="w-full"
        >
          <TabsList className="mb-8 p-1 bg-muted/60 backdrop-blur-sm shadow-md rounded-full w-fit">
            <TabsTrigger value="overview" className="rounded-full gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-300">
              <BarChart3 size={16} />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="map" className="rounded-full gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all duration-300">
              <MapPin size={16} />
              <span>Map View</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8 w-full"
            >
              <motion.div variants={fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2 bg-gradient-to-r from-background to-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <span className="p-1.5 rounded-full bg-primary/10 text-primary">
                        <ChartLine size={18} />
                      </span>
                      Category Distribution
                    </CardTitle>
=======
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8 md:py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground mb-8">
            Explore and analyze civic issues across the community
          </p>

          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Category Distribution</CardTitle>
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
                    <CardDescription>
                      Number of issues by category
                    </CardDescription>
                  </CardHeader>
<<<<<<< HEAD
                  <CardContent className="h-[350px] p-4">
=======
                  <CardContent className="h-[300px] p-4">
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
                    {isLoading ? (
                      <div className="h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                      </div>
                    ) : (
                      <CategoryDistribution 
                        data={categoryData} 
                        onCategoryClick={handleCategoryClick}
                        selectedCategory={selectedCategory}
                      />
                    )}
                  </CardContent>
                </Card>

<<<<<<< HEAD
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2 bg-gradient-to-r from-background to-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <span className="p-1.5 rounded-full bg-primary/10 text-primary">
                        <ChartLine size={18} />
                      </span>
                      Temporal Analysis
                    </CardTitle>
=======
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Temporal Analysis</CardTitle>
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
                    <CardDescription>
                      Issue reports over the past 7 days
                    </CardDescription>
                  </CardHeader>
<<<<<<< HEAD
                  <CardContent className="h-[350px] p-4">
=======
                  <CardContent className="h-[300px] p-4">
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
                    {isLoading ? (
                      <div className="h-full flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                      </div>
                    ) : (
                      <TemporalAnalysis data={temporalData} />
                    )}
                  </CardContent>
                </Card>
<<<<<<< HEAD
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="overflow-hidden border border-border/50 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-background to-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <span className="p-1.5 rounded-full bg-primary/10 text-primary">
                        <ChevronDown size={18} />
                      </span>
                      Top Voted Issues
                    </CardTitle>
                    <CardDescription>
                      Most supported issues by community votes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    {isLoading ? (
                      <div className="h-[400px] flex items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                      </div>
                    ) : (
                      <TopVotedIssues issues={topVotedIssues} />
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="map" className="h-[75vh] min-h-[600px]">
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              <Card className="h-full overflow-hidden border border-border/50 shadow-md">
=======
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Top Voted Issues</CardTitle>
                  <CardDescription>
                    Most supported issues by community votes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="h-[400px] flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                  ) : (
                    <TopVotedIssues issues={topVotedIssues} />
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="map" className="h-[70vh] min-h-[600px]">
              <Card className="h-full">
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
                <CardContent className="p-0 h-full overflow-hidden">
                  {isLoading ? (
                    <div className="h-full flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                  ) : (
                    <MapView 
                      issues={mapIssues}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                      focusIssueId={focusIssueId}
                    />
                  )}
                </CardContent>
              </Card>
<<<<<<< HEAD
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
=======
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
  );
};

export default Analytics;
