<<<<<<< HEAD

import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthForm from '@/components/auth/AuthForm';
import Layout from '@/components/Layout';
import { useAuth } from '@/context/AuthContext';
import { MapPin, CheckCircle, ArrowRight, BadgeCheck, Shield, Users, BarChart3 } from 'lucide-react';

const Index = () => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const authSectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.state && location.state.scrollToAuth && authSectionRef.current) {
      authSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      // Clear the state to prevent scrolling on subsequent renders
      navigate('/', { replace: true, state: {} });
    }
  }, [location, navigate]);

  const handleGetStarted = () => {
    if (user) {
      navigate('/report');
    } else if (authSectionRef.current) {
      authSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuthSuccess = () => {
    navigate('/report');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-5%] right-[-5%] w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full bg-secondary/5 blur-3xl"></div>
          <div className="absolute top-[20%] left-[40%] w-60 h-60 rounded-full bg-accent/5 blur-3xl"></div>
        </div>
        
        <div className="container px-4 sm:px-6 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <BadgeCheck size={16} className="mr-1.5" />
              Empowering communities through civic engagement
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold max-w-4xl leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-civic-blue to-civic-green dark:from-civic-blue-dark dark:to-civic-green-dark">
                Make your voice heard.
              </span> Report local issues that matter.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mt-6">
              CivicSync is your platform to report, track, and vote on local civic issues. 
              Together, we can build stronger, more responsive communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button 
                size="lg" 
                className="rounded-full btn-harmony px-8 bg-civic-blue hover:bg-civic-blue/90 dark:bg-civic-blue-dark dark:hover:bg-civic-blue-dark/90"
                onClick={handleGetStarted}
              >
                {user ? 'Report an Issue' : 'Get Started'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {!user && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full btn-harmony px-8 border-civic-blue dark:border-civic-blue-dark text-civic-blue dark:text-civic-blue-dark"
                  asChild
                >
                  <Link to="/issues">Browse Issues</Link>
                </Button>
              )}
            </div>
          </div>

          {/* Feature preview image */}
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border shadow-lg">
            <div className="aspect-[16/9] bg-muted/30 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="CivicSync platform preview" 
                className="h-full w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-bold font-outfit text-white drop-shadow-md">
                  Interactive Issue Map
                </h3>
                <p className="text-sm text-white/90 mt-1 drop-shadow-md">
                  Visualize issues in your community and track their progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30"></div>
        <div className="container px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              CivicSync provides powerful tools to help citizens and local governments 
              collaborate effectively on addressing community issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-harmony p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3">Report Issues</h3>
              <p className="text-muted-foreground mb-4">
                Submit detailed reports about civic issues with locations, photos, and descriptions.
              </p>
              {user ? (
                <Link to="/report" className="inline-flex items-center text-primary hover:underline">
                  Create a report <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              ) : (
                <Link to="/" className="inline-flex items-center text-primary hover:underline" onClick={handleGetStarted}>
                  Sign up to report <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              )}
            </div>

            <div className="card-harmony p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3">Vote & Support</h3>
              <p className="text-muted-foreground mb-4">
                Upvote issues that matter to you and help prioritize community concerns.
              </p>
              <Link to="/issues" className="inline-flex items-center text-primary hover:underline">
                Browse issues <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card-harmony p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3">Track Analytics</h3>
              <p className="text-muted-foreground mb-4">
                Visualize data trends and monitor the progress of issue resolution.
              </p>
              <Link to="/analytics" className="inline-flex items-center text-primary hover:underline">
                View analytics <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A simple, efficient process to report and resolve community issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 relative">
                  <span className="text-xl font-bold font-outfit text-primary">1</span>
                </div>
                <div className="absolute top-7 left-14 w-full h-1 bg-primary/20 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3">Sign Up</h3>
              <p className="text-muted-foreground">
                Create an account to access all features.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <span className="text-xl font-bold font-outfit text-primary">2</span>
                </div>
                <div className="absolute top-7 left-14 w-full h-1 bg-primary/20 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3">Report Issue</h3>
              <p className="text-muted-foreground">
                Submit details about the civic issue you've observed.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <span className="text-xl font-bold font-outfit text-primary">3</span>
                </div>
                <div className="absolute top-7 left-14 w-full h-1 bg-primary/20 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3">Community Support</h3>
              <p className="text-muted-foreground">
                Others can vote and comment on your issue.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-outfit mb-3">Resolution</h3>
              <p className="text-muted-foreground">
                Track the progress until the issue is resolved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      {!user && (
        <section ref={authSectionRef} id="auth-section" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4">Join CivicSync Today</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Create an account to start reporting issues, voting, and making a difference in your community.
              </p>
            </div>
            
            <AuthForm onSuccess={handleAuthSuccess} />
          </div>
        </section>
      )}

      {/* Trust Section */}
      <section className="py-16 md:py-20">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-4">Trusted By Communities</h2>
              <p className="text-lg text-muted-foreground">
                CivicSync is built with privacy, security, and accessibility as core principles.
                Your data is protected, and your voice matters.
              </p>
              
              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-4 w-4 text-primary" />
                  </div>
                  <span>Data privacy & security</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <span>Community-driven priorities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                  </div>
                  <span>Transparent issue tracking</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden border shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Community meeting" 
                  className="w-full h-full object-cover aspect-video"
=======
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { useAuth } from "@/context/AuthContext";
import { getIssues } from "@/lib/supabase-data";
import { Issue } from "@/types";
import StatusBadge from "@/components/issues/StatusBadge";
import CategoryIcon from "@/components/issues/CategoryIcon";

// Static hero image URL
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop";

const Index = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const [recentIssues, setRecentIssues] = useState<Issue[]>([]);
  const [isLoadingIssues, setIsLoadingIssues] = useState(true);
  const authSectionRef = useRef<HTMLDivElement>(null);
  
  const handleAuthSuccess = () => {
    // This is handled by the AuthContext now
  };

  useEffect(() => {
    const fetchRecentIssues = async () => {
      try {
        const issues = await getIssues();
        setRecentIssues(issues.slice(0, 3)); // Only get the 3 most recent issues
      } catch (error) {
        console.error("Error fetching recent issues:", error);
      } finally {
        setIsLoadingIssues(false);
      }
    };

    fetchRecentIssues();
  }, []);

  useEffect(() => {
    if (location.state && location.state.scrollToAuth) {
      setTimeout(() => {
        const el = document.getElementById("auth-section");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                  Report civic issues in your community
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
                  CivicSync connects citizens with local authorities to resolve problems 
                  and improve neighborhoods together.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button size="lg" asChild>
                    <Link to="/report">
                      Report an Issue <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/issues">Browse Issues</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3 scale-105"></div>
                <img 
                  src={HERO_IMAGE_URL}
                  alt="Community enhancement" 
                  className="relative rounded-lg shadow-lg w-full h-64 md:h-auto object-cover"
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
                />
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="container px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-6">
              Ready to improve your community?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join CivicSync today and start making a difference. Report issues, vote on what matters, 
              and help build a better community together.
            </p>
            <Button 
              size="lg" 
              className="rounded-full btn-harmony px-8 text-lg bg-civic-blue hover:bg-civic-blue/90 dark:bg-civic-blue-dark dark:hover:bg-civic-blue-dark/90"
              onClick={handleGetStarted}
            >
              {user ? 'Report an Issue Now' : 'Get Started'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
=======
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="mt-3 text-muted-foreground">
                Three simple steps to report and track civic issues in your neighborhood
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Submit Your Report</h3>
                <p className="text-muted-foreground">
                  Fill out a simple form with details about the issue you've noticed in your community.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
                <p className="text-muted-foreground">
                  Follow updates as your issue is received, reviewed, and addressed by local authorities.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Problem Solved</h3>
                <p className="text-muted-foreground">
                  See real results as issues are resolved, improving quality of life in your neighborhood.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Issues Preview */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Recent Issues</h2>
              <Button variant="outline" asChild>
                <Link to="/issues">View All</Link>
              </Button>
            </div>
            
            {isLoadingIssues ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg shadow overflow-hidden">
                    <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                    <div className="p-4">
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-24 animate-pulse mb-2"></div>
                      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-2"></div>
                      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 animate-pulse mb-3"></div>
                      <div className="flex justify-between text-sm">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16 animate-pulse"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : recentIssues.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentIssues.map((issue) => (
                  <Link key={issue.id} to={`/issues/${issue.id}`} className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden block focus:outline-none focus:ring-2 focus:ring-primary">
                    <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                      {issue.imageUrl ? (
                        <img 
                          src={issue.imageUrl} 
                          alt={issue.title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <CategoryIcon category={issue.category} size={48} />
                        </div>
                      )}
                      <div className="absolute top-2 right-2">
                        <StatusBadge status={issue.status} size="sm" />
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium mb-2 capitalize">
                        {issue.category}
                      </span>
                      <h3 className="text-lg font-semibold mb-2 hover:text-primary hover:underline">
                        {issue.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">{issue.location}</p>
                      <div className="flex justify-between text-sm">
                        <span>{issue.votes} votes</span>
                        <span>{new Date(issue.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center">
                <h3 className="text-xl font-medium mb-2">No issues reported yet</h3>
                <p className="mb-4 text-muted-foreground">Be the first to report an issue in your community!</p>
                <Button asChild>
                  <Link to="/report">Report an Issue</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Auth Section */}
        <section id="auth-section" className="py-16 bg-white dark:bg-gray-900" ref={authSectionRef}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold">Join Our Community</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Create an account to report issues, track your reports, and make a difference 
                  in your neighborhood.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-civic-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Track the status of your reported issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-civic-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Receive updates when issues are resolved</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-civic-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vote on issues that matter to you</span>
                  </li>
                </ul>
              </div>
              
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : user ? (
                <div className="bg-civic-light dark:bg-gray-800 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">You're logged in!</h3>
                  <p className="mb-6 text-gray-800 dark:text-gray-300">
                    Thank you for being part of our community. You can now report issues 
                    and track their progress.
                  </p>
                  <Button size="lg" asChild>
                    <Link to="/report">Report an Issue</Link>
                  </Button>
                </div>
              ) : (
                <AuthForm onSuccess={handleAuthSuccess} />
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
>>>>>>> 696f3d05e099c37c08eeebe50acc8a5e7e36b570
  );
};

export default Index;
