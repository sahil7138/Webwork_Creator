"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ExternalLink,
  Plus,
  Trash2,
  Check,
  Copy,
  CheckCircle2,
  Palette,
  Code,
  Camera,
  Video,
  BookOpen,
  Image as ImageIcon,
  FolderGit2,
  Globe,
  ArrowRight,
  Eye,
  Layers,
  Heart,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";
import {
  CREATOR_THEMES,
  DEMO_CREATOR,
  BEGINNER_PORTFOLIO_TEMPLATES,
  STARTER_AVATARS,
  StarterTemplate,
} from "@/lib/constants";
import { CreatorProfile, CreatorTheme, PortfolioProject, CreatorBlock } from "@/types";
import {
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
  GithubIcon,
} from "@/components/ui/SocialIcons";

export function EasyProfileBuilder() {
  const [profile, setProfile] = useState<CreatorProfile>({
    ...DEMO_CREATOR,
    portfolioProjects: DEMO_CREATOR.portfolioProjects || [],
  });

  const [activeStep, setActiveStep] = useState<
    "templates" | "basic" | "portfolio" | "blocks" | "theme"
  >("templates");

  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("designer");
  const [activePreviewTab, setActivePreviewTab] = useState<
    "links" | "portfolio" | "store" | "mediakit"
  >("portfolio");

  const [copiedLink, setCopiedLink] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);

  // New Project Form Modal
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "Web Development",
    projectUrl: "https://",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    tags: "React, Next.js, Design",
  });

  // New Block Form Modal
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [newBlock, setNewBlock] = useState<{
    title: string;
    subtitle: string;
    url: string;
    type: "link" | "email_collector" | "tip_jar";
    badge: string;
  }>({
    title: "",
    subtitle: "",
    url: "https://",
    type: "link",
    badge: "NEW",
  });

  // Apply a 1-click starter template
  const handleApplyTemplate = (tpl: StarterTemplate) => {
    setSelectedTemplateId(tpl.id);
    const chosenTheme =
      CREATOR_THEMES.find((t) => t.id === tpl.themeId) || CREATOR_THEMES[0];

    setProfile({
      ...profile,
      displayName: tpl.displayName,
      username: tpl.username,
      bio: tpl.bio,
      avatarUrl: tpl.avatarUrl,
      category: tpl.category,
      theme: chosenTheme,
      socials: {
        ...profile.socials,
        ...tpl.socials,
      },
      portfolioProjects: [...tpl.projects],
      blocks: [...tpl.starterBlocks],
    });

    setPublishSuccess(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`http://localhost:3000/p/${profile.username}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handlePublish = () => {
    setPublishSuccess(true);
    setTimeout(() => setPublishSuccess(false), 4000);
  };

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title.trim()) return;

    const proj: PortfolioProject = {
      id: `proj_${Date.now()}`,
      title: newProject.title,
      description: newProject.description,
      category: newProject.category,
      projectUrl: newProject.projectUrl,
      thumbnailUrl: newProject.thumbnailUrl,
      tags: newProject.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      featured: true,
    };

    setProfile({
      ...profile,
      portfolioProjects: [proj, ...(profile.portfolioProjects || [])],
    });

    setNewProject({
      title: "",
      description: "",
      category: "Web Development",
      projectUrl: "https://",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
      tags: "React, Next.js, Design",
    });

    setShowProjectModal(false);
    setActivePreviewTab("portfolio");
  };

  const handleDeleteProject = (id: string) => {
    setProfile({
      ...profile,
      portfolioProjects: (profile.portfolioProjects || []).filter(
        (p) => p.id !== id
      ),
    });
  };

  const handleAddBlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlock.title.trim()) return;

    const block: CreatorBlock = {
      id: `b_${Date.now()}`,
      type: newBlock.type,
      title: newBlock.title,
      subtitle: newBlock.subtitle || undefined,
      url: newBlock.type === "link" ? newBlock.url : undefined,
      badge: newBlock.badge || undefined,
      enabled: true,
      order: profile.blocks.length + 1,
    };

    setProfile({
      ...profile,
      blocks: [...profile.blocks, block],
    });

    setNewBlock({
      title: "",
      subtitle: "",
      url: "https://",
      type: "link",
      badge: "NEW",
    });

    setShowBlockModal(false);
    setActivePreviewTab("links");
  };

  const handleDeleteBlock = (id: string) => {
    setProfile({
      ...profile,
      blocks: profile.blocks.filter((b) => b.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Beginner Guide & Quick Publish Bar */}
      <div className="p-5 rounded-2xl bg-white border border-zinc-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
            <span>Profile & Portfolio</span>
          </div>
          <h2 className="text-lg font-extrabold text-zinc-950">
            Create your profile and portfolio
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            Pick a starter template, add your projects and links, and preview your page in real time.
          </p>
        </div>

        <div className="flex items-center gap-2.5 w-full md:w-auto">
          <button
            onClick={handlePublish}
            className="flex-1 md:flex-none px-4 py-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Publish Live</span>
          </button>

          <a
            href={`/p/${profile.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2.5 rounded-xl border border-zinc-200 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
          >
            <span>Live URL</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Publish Toast Alert */}
      {publishSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center justify-between animate-fadeIn shadow-2xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              🎉 <strong>Your portfolio is published!</strong> Live at:{" "}
              <code className="text-zinc-950 bg-white border border-emerald-200 px-1.5 py-0.5 rounded font-mono">
                webworks.io/{profile.username}
              </code>
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-[11px] font-bold flex items-center gap-1 text-emerald-900"
          >
            {copiedLink ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            <span>{copiedLink ? "Copied" : "Copy Link"}</span>
          </button>
        </div>
      )}

      {/* Main Grid: Left Builder Controls, Right Live Device Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Easy Builder Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step Selection Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-100 border border-zinc-200 overflow-x-auto text-xs">
            <button
              onClick={() => setActiveStep("templates")}
              className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                activeStep === "templates"
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" /> 1. Starter Presets
            </button>
            <button
              onClick={() => setActiveStep("basic")}
              className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                activeStep === "basic"
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
              }`}
            >
              <span>2. Bio & Avatar</span>
            </button>
            <button
              onClick={() => {
                setActiveStep("portfolio");
                setActivePreviewTab("portfolio");
              }}
              className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                activeStep === "portfolio"
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" /> 3. Portfolio Projects (
              {profile.portfolioProjects?.length || 0})
            </button>
            <button
              onClick={() => {
                setActiveStep("blocks");
                setActivePreviewTab("links");
              }}
              className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                activeStep === "blocks"
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
              }`}
            >
              <Layers className="w-3.5 h-3.5" /> 4. Custom Links
            </button>
            <button
              onClick={() => setActiveStep("theme")}
              className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
                activeStep === "theme"
                  ? "bg-zinc-950 text-white shadow-xs"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60"
              }`}
            >
              <Palette className="w-3.5 h-3.5" /> 5. Theme
            </button>
          </div>

          {/* STEP 1: 1-CLICK STARTER TEMPLATES */}
          {activeStep === "templates" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-950 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-zinc-900" />
                    <span>Choose Your Starter Role Preset</span>
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Click any role below to pre-load a complete, professional bio, portfolio projects, and links.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {BEGINNER_PORTFOLIO_TEMPLATES.map((tpl) => {
                  const isSelected = selectedTemplateId === tpl.id;
                  return (
                    <div
                      key={tpl.id}
                      onClick={() => handleApplyTemplate(tpl)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all hover:shadow-xs ${
                        isSelected
                          ? "border-zinc-950 bg-white ring-2 ring-zinc-950/10 shadow-sm"
                          : "border-zinc-200 bg-white hover:border-zinc-300"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={tpl.avatarUrl}
                          alt={tpl.displayName}
                          className="w-12 h-12 rounded-xl object-cover ring-1 ring-zinc-200 shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h4 className="text-xs font-bold text-zinc-950 truncate">
                              {tpl.role}
                            </h4>
                            {isSelected && (
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-950 text-white">
                                Active
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-zinc-500 font-medium">
                            {tpl.displayName} • @{tpl.username}
                          </div>
                          <p className="text-[11px] text-zinc-600 line-clamp-2 mt-1 leading-snug">
                            {tpl.bio}
                          </p>
                          <div className="mt-2 text-[10px] text-zinc-400 flex items-center gap-2">
                            <span>{tpl.projects.length} sample projects</span>
                            <span>•</span>
                            <span>{tpl.starterBlocks.length} links</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-100 border border-zinc-200 text-xs text-zinc-700 flex items-center justify-between">
                <span>Want to customize the details? Move to the next tab.</span>
                <button
                  onClick={() => setActiveStep("basic")}
                  className="text-xs font-bold text-zinc-950 hover:text-zinc-700 flex items-center gap-1"
                >
                  Edit Profile Info <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: BIO, AVATAR & SOCIALS */}
          {activeStep === "basic" && (
            <div className="space-y-5 animate-fadeIn p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-sm">
              <h3 className="text-sm font-bold text-zinc-950">Profile Basics</h3>

              {/* Avatar Selector */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-2">
                  Choose an Avatar or Paste Image URL
                </label>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  {STARTER_AVATARS.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() =>
                        setProfile({ ...profile, avatarUrl: item.url })
                      }
                      className={`relative rounded-full p-0.5 transition-all ${
                        profile.avatarUrl === item.url
                          ? "ring-2 ring-zinc-950 scale-105"
                          : "opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={item.url}
                        alt={item.label}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  value={profile.avatarUrl}
                  onChange={(e) =>
                    setProfile({ ...profile, avatarUrl: e.target.value })
                  }
                  placeholder="https://images.unsplash.com/..."
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 focus:outline-none focus:border-zinc-800"
                />
              </div>

              {/* Display Name & Handle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Your Name / Brand
                  </label>
                  <input
                    type="text"
                    value={profile.displayName}
                    onChange={(e) =>
                      setProfile({ ...profile, displayName: e.target.value })
                    }
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-950 font-medium focus:outline-none focus:border-zinc-800"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Profile Vanity Slug
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-xs text-zinc-400 select-none">
                      webworks.io/
                    </span>
                    <input
                      type="text"
                      value={profile.username}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          username: e.target.value
                            .toLowerCase()
                            .replace(/[^a-z0-9_-]/g, ""),
                        })
                      }
                      className="w-full text-xs pl-26 pr-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-950 font-mono font-medium focus:outline-none focus:border-zinc-800"
                    />
                  </div>
                </div>
              </div>

              {/* Headline / Bio */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Bio / Headline
                </label>
                <textarea
                  rows={3}
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  placeholder="Tell visitors what you build, create, or offer..."
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 resize-none focus:outline-none focus:border-zinc-800"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Primary Category
                </label>
                <input
                  type="text"
                  value={profile.category}
                  onChange={(e) =>
                    setProfile({ ...profile, category: e.target.value })
                  }
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 focus:outline-none focus:border-zinc-800"
                />
              </div>

              {/* Social Media Links */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-2">
                  Social Handles
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-200">
                    <GithubIcon className="w-4 h-4 text-zinc-600 shrink-0" />
                    <input
                      type="text"
                      placeholder="https://github.com/username"
                      value={profile.socials.github || ""}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          socials: { ...profile.socials, github: e.target.value },
                        })
                      }
                      className="bg-transparent text-xs text-zinc-900 focus:outline-none w-full"
                    />
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-200">
                    <TwitterIcon className="w-4 h-4 text-zinc-600 shrink-0" />
                    <input
                      type="text"
                      placeholder="https://x.com/username"
                      value={profile.socials.twitter || ""}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          socials: { ...profile.socials, twitter: e.target.value },
                        })
                      }
                      className="bg-transparent text-xs text-zinc-900 focus:outline-none w-full"
                    />
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-200">
                    <InstagramIcon className="w-4 h-4 text-zinc-600 shrink-0" />
                    <input
                      type="text"
                      placeholder="https://instagram.com/username"
                      value={profile.socials.instagram || ""}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          socials: {
                            ...profile.socials,
                            instagram: e.target.value,
                          },
                        })
                      }
                      className="bg-transparent text-xs text-zinc-900 focus:outline-none w-full"
                    />
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-zinc-50 border border-zinc-200">
                    <YoutubeIcon className="w-4 h-4 text-zinc-600 shrink-0" />
                    <input
                      type="text"
                      placeholder="https://youtube.com/@channel"
                      value={profile.socials.youtube || ""}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          socials: { ...profile.socials, youtube: e.target.value },
                        })
                      }
                      className="bg-transparent text-xs text-zinc-900 focus:outline-none w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PORTFOLIO PROJECTS */}
          {activeStep === "portfolio" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-950 flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-zinc-900" />
                    <span>Your Portfolio Works & Case Studies</span>
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Showcase apps, designs, videos, photography, or case studies with thumbnail images and live links.
                  </p>
                </div>

                <button
                  onClick={() => setShowProjectModal(true)}
                  className="px-3.5 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </div>

              {/* Add Project Form (Inline Modal) */}
              {showProjectModal && (
                <form
                  onSubmit={handleAddProject}
                  className="p-5 rounded-2xl bg-white border border-zinc-200/90 space-y-3.5 shadow-2xl"
                >
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                    <span className="text-xs font-bold text-zinc-950">
                      New Portfolio Item
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowProjectModal(false)}
                      className="text-zinc-500 hover:text-zinc-950 text-xs font-semibold"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                        Project Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. HyperFlow Design System"
                        value={newProject.title}
                        onChange={(e) =>
                          setNewProject({ ...newProject, title: e.target.value })
                        }
                        className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-950 focus:outline-none focus:border-zinc-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                        Category / Role
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Web Application, UI Design"
                        value={newProject.category}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            category: e.target.value,
                          })
                        }
                        className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-950 focus:outline-none focus:border-zinc-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                      Short Description
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Briefly explain what you built, designed, or achieved..."
                      value={newProject.description}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          description: e.target.value,
                        })
                      }
                      className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-900 resize-none focus:outline-none focus:border-zinc-800"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                        Project URL / Live Demo
                      </label>
                      <input
                        type="text"
                        placeholder="https://..."
                        value={newProject.projectUrl}
                        onChange={(e) =>
                          setNewProject({
                            ...newProject,
                            projectUrl: e.target.value,
                          })
                        }
                        className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-950 font-mono focus:outline-none focus:border-zinc-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                        Tags (comma separated)
                      </label>
                      <input
                        type="text"
                        placeholder="React, Next.js, Figma"
                        value={newProject.tags}
                        onChange={(e) =>
                          setNewProject({ ...newProject, tags: e.target.value })
                        }
                        className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-900 focus:outline-none focus:border-zinc-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                      Thumbnail Image URL
                    </label>
                    <input
                      type="text"
                      placeholder="https://images.unsplash.com/..."
                      value={newProject.thumbnailUrl}
                      onChange={(e) =>
                        setNewProject({
                          ...newProject,
                          thumbnailUrl: e.target.value,
                        })
                      }
                      className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-900 focus:outline-none focus:border-zinc-800"
                    />
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                    >
                      Save Portfolio Project
                    </button>
                  </div>
                </form>
              )}

              {/* Projects List */}
              <div className="space-y-3">
                {(profile.portfolioProjects || []).length === 0 ? (
                  <div className="p-8 rounded-2xl bg-white border border-zinc-200/90 text-center space-y-2 shadow-sm">
                    <FolderGit2 className="w-8 h-8 text-zinc-400 mx-auto" />
                    <div className="text-xs font-bold text-zinc-950">
                      No portfolio projects added yet
                    </div>
                    <p className="text-[11px] text-zinc-500 max-w-sm mx-auto">
                      Click "Add Project" above or choose a starter role preset to auto-populate sample projects.
                    </p>
                  </div>
                ) : (
                  profile.portfolioProjects?.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
                    >
                      <div className="flex items-start sm:items-center gap-3.5 min-w-0">
                        <img
                          src={proj.thumbnailUrl}
                          alt={proj.title}
                          className="w-16 h-14 rounded-xl object-cover ring-1 ring-zinc-200 shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-zinc-950 truncate">
                              {proj.title}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200 font-semibold shrink-0">
                              {proj.category}
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-600 line-clamp-1 mt-0.5">
                            {proj.description}
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
                            {proj.tags.map((t, idx) => (
                              <span
                                key={idx}
                                className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200/60"
                              >
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <a
                          href={proj.projectUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-zinc-500 hover:text-zinc-950 p-1.5 rounded-lg hover:bg-zinc-100 transition-colors"
                          title="Open Link"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => handleDeleteProject(proj.id)}
                          className="text-xs text-zinc-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                          title="Delete Project"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* STEP 4: CUSTOM LINKS & BLOCKS */}
          {activeStep === "blocks" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-950 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-zinc-900" />
                    <span>Page Links & Interactive Blocks</span>
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Add quick links to your Discord, Newsletter, GitHub, or Tip Jar.
                  </p>
                </div>

                <button
                  onClick={() => setShowBlockModal(true)}
                  className="px-3.5 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Link Block</span>
                </button>
              </div>

              {/* Add Block Inline Form */}
              {showBlockModal && (
                <form
                  onSubmit={handleAddBlock}
                  className="p-5 rounded-2xl bg-white border border-zinc-200/90 space-y-3.5 shadow-2xl"
                >
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                    <span className="text-xs font-bold text-zinc-950">
                      New Link / Action Block
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowBlockModal(false)}
                      className="text-zinc-500 hover:text-zinc-950 text-xs font-semibold"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                        Block Type
                      </label>
                      <select
                        value={newBlock.type}
                        onChange={(e) =>
                          setNewBlock({
                            ...newBlock,
                            type: e.target.value as any,
                          })
                        }
                        className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-900 focus:outline-none focus:border-zinc-800"
                      >
                        <option value="link">Custom URL Link</option>
                        <option value="email_collector">
                          Newsletter / Email Opt-in
                        </option>
                        <option value="tip_jar">Tip Jar / Coffee Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                        Badge Label (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. FREE, NEW, LATEST"
                        value={newBlock.badge}
                        onChange={(e) =>
                          setNewBlock({ ...newBlock, badge: e.target.value })
                        }
                        className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-950 focus:outline-none focus:border-zinc-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                      Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Join My Free Discord Community"
                      value={newBlock.title}
                      onChange={(e) =>
                        setNewBlock({ ...newBlock, title: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-950 focus:outline-none focus:border-zinc-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                      Subtitle / Helper Text
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 4,200+ creators sharing code and design"
                      value={newBlock.subtitle}
                      onChange={(e) =>
                        setNewBlock({ ...newBlock, subtitle: e.target.value })
                      }
                      className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-900 focus:outline-none focus:border-zinc-800"
                    />
                  </div>

                  {newBlock.type === "link" && (
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-700 mb-1">
                        Destination URL
                      </label>
                      <input
                        type="text"
                        placeholder="https://..."
                        value={newBlock.url}
                        onChange={(e) =>
                          setNewBlock({ ...newBlock, url: e.target.value })
                        }
                        className="w-full text-xs px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-950 font-mono focus:outline-none focus:border-zinc-800"
                      />
                    </div>
                  )}

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                    >
                      Add Block
                    </button>
                  </div>
                </form>
              )}

              {/* Blocks list */}
              <div className="space-y-3">
                {profile.blocks.map((b) => (
                  <div
                    key={b.id}
                    className="p-4 rounded-2xl bg-white border border-zinc-200/90 shadow-sm flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-700 shrink-0 border border-zinc-200/80">
                        {b.order}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-zinc-950 flex items-center gap-2 truncate">
                          <span>{b.title}</span>
                          {b.badge && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200 font-semibold shrink-0">
                              {b.badge}
                            </span>
                          )}
                        </div>
                        {b.subtitle && (
                          <div className="text-[10px] text-zinc-500 truncate mt-0.5">
                            {b.subtitle}
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteBlock(b.id)}
                      className="text-xs text-zinc-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors shrink-0"
                      title="Remove Block"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: VISUAL THEME */}
          {activeStep === "theme" && (
            <div className="space-y-4 animate-fadeIn p-6 rounded-2xl bg-white border border-zinc-200/90 shadow-sm">
              <h3 className="text-sm font-bold text-zinc-950">Visual Profile Theme</h3>
              <p className="text-xs text-zinc-500">
                Choose a sleek minimalist theme. Clean typography, subtle hairline borders, and zero clutter.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {CREATOR_THEMES.map((th) => {
                  const isSelected = profile.theme.id === th.id;
                  return (
                    <div
                      key={th.id}
                      onClick={() => setProfile({ ...profile, theme: th })}
                      className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                        isSelected
                          ? "border-zinc-950 bg-white ring-2 ring-zinc-950/10 shadow-sm"
                          : "border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-xs"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-zinc-950">
                          {th.name}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        )}
                      </div>

                      <div
                        className="h-10 rounded-xl bg-gradient-to-r p-2 flex items-center justify-between text-[10px] font-bold text-white shadow-inner"
                        style={{
                          background:
                            th.id === "studio-light"
                              ? "linear-gradient(to right, #09090b, #27272a)"
                              : th.id === "porcelain-minimal"
                              ? "linear-gradient(to right, #242321, #5a5853)"
                              : th.id === "crisp-slate"
                              ? "linear-gradient(to right, #0f172a, #334155)"
                              : "linear-gradient(to right, #18181b, #71717a)",
                          color: "#fff",
                        }}
                      >
                        <span className="px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm">
                          Preview Button
                        </span>
                        <span className="text-[10px] text-white/90">
                          {th.buttonRadius}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Real-Time Interactive Mobile Simulator */}
        <div className="lg:col-span-5 flex flex-col items-center sticky top-24">
          <div className="w-full flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-700">
              <Eye className="w-3.5 h-3.5 text-zinc-500" />
              <span>Live Profile Preview</span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Sync
            </span>
          </div>

          {/* Smartphone Frame */}
          <div className="w-[320px] sm:w-[340px] rounded-[44px] p-3.5 bg-gradient-to-b from-zinc-200 via-zinc-100 to-zinc-300 border-4 border-zinc-300 shadow-2xl shadow-zinc-400/40 relative overflow-hidden">
            {/* Dynamic Island / Speaker Notch */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-900 rounded-full z-30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 ml-auto mr-2" />
            </div>

            {/* Inner Phone Screen */}
            <div
              className={`w-full rounded-[36px] min-h-[580px] max-h-[640px] overflow-y-auto ${profile.theme.background} p-4 pt-10 text-zinc-900 flex flex-col text-center scrollbar-none transition-colors duration-300`}
            >
              {/* Creator Avatar & Verified Badge */}
              <div className="relative mx-auto mt-2 mb-3">
                <img
                  src={profile.avatarUrl}
                  alt={profile.displayName}
                  className="w-18 h-18 rounded-full object-cover ring-2 ring-zinc-200 shadow-md mx-auto"
                />
                {profile.verified && (
                  <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-zinc-950 text-white shadow-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>

              {/* Names & Category */}
              <h3 className="text-sm font-extrabold text-zinc-950 tracking-tight">
                {profile.displayName || "Your Name"}
              </h3>
              <p className="text-[11px] text-zinc-500 font-medium">
                @{profile.username || "username"} • {profile.category}
              </p>

              {/* Bio */}
              <p className="text-[11px] text-zinc-600 mt-2 px-2 leading-relaxed">
                {profile.bio || "Add a quick bio telling the world what you do."}
              </p>

              {/* Social icons row */}
              <div className="flex justify-center items-center gap-3 my-3">
                {profile.socials.github && (
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 border border-zinc-200/80 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {profile.socials.twitter && (
                  <a
                    href={profile.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 border border-zinc-200/80 transition-colors"
                  >
                    <TwitterIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {profile.socials.instagram && (
                  <a
                    href={profile.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 border border-zinc-200/80 transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {profile.socials.youtube && (
                  <a
                    href={profile.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 hover:text-zinc-950 border border-zinc-200/80 transition-colors"
                  >
                    <YoutubeIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Navigation Tabs inside Phone (Links / Portfolio / Store / MediaKit) */}
              <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-zinc-100 border border-zinc-200 mb-4 text-[10px] font-semibold">
                <button
                  onClick={() => setActivePreviewTab("links")}
                  className={`py-1.5 rounded-lg transition-all ${
                    activePreviewTab === "links"
                      ? "bg-zinc-950 text-white font-bold shadow-sm"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  Links
                </button>
                <button
                  onClick={() => setActivePreviewTab("portfolio")}
                  className={`py-1.5 rounded-lg transition-all ${
                    activePreviewTab === "portfolio"
                      ? "bg-zinc-950 text-white font-bold shadow-sm"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  Portfolio
                </button>
                <button
                  onClick={() => setActivePreviewTab("store")}
                  className={`py-1.5 rounded-lg transition-all ${
                    activePreviewTab === "store"
                      ? "bg-zinc-950 text-white font-bold shadow-sm"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  Store
                </button>
                <button
                  onClick={() => setActivePreviewTab("mediakit")}
                  className={`py-1.5 rounded-lg transition-all ${
                    activePreviewTab === "mediakit"
                      ? "bg-zinc-950 text-white font-bold shadow-sm"
                      : "text-zinc-600 hover:text-zinc-950"
                  }`}
                >
                  Stats
                </button>
              </div>

              {/* TAB 1: LINKS FEED */}
              {activePreviewTab === "links" && (
                <div className="space-y-2.5 text-left">
                  {profile.blocks.map((block) => (
                    <div
                      key={block.id}
                      className={`p-3 ${profile.theme.cardBg} ${profile.theme.buttonRadius} border border-zinc-200/90 shadow-sm flex items-center justify-between gap-2.5 group transition-all hover:border-zinc-400`}
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-bold text-zinc-950 truncate">
                            {block.title}
                          </span>
                          {block.badge && (
                            <span className="text-[8px] font-extrabold px-1.5 py-0.2 rounded bg-zinc-100 text-zinc-700 border border-zinc-200 shrink-0">
                              {block.badge}
                            </span>
                          )}
                        </div>
                        {block.subtitle && (
                          <div className="text-[9px] text-zinc-500 truncate mt-0.5">
                            {block.subtitle}
                          </div>
                        )}
                      </div>
                      <ExternalLink className="w-3 h-3 text-zinc-400 shrink-0" />
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: PORTFOLIO SHOWCASE */}
              {activePreviewTab === "portfolio" && (
                <div className="space-y-3 text-left">
                  {(profile.portfolioProjects || []).length === 0 ? (
                    <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-center text-xs text-zinc-500">
                      No portfolio projects yet.
                    </div>
                  ) : (
                    profile.portfolioProjects?.map((proj) => (
                      <div
                        key={proj.id}
                        className={`overflow-hidden ${profile.theme.cardBg} ${profile.theme.buttonRadius} border border-zinc-200/90 shadow-sm group`}
                      >
                        <div className="relative h-28 w-full bg-zinc-100 overflow-hidden">
                          <img
                            src={proj.thumbnailUrl}
                            alt={proj.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <span className="absolute top-2 left-2 text-[9px] font-bold px-1.5 py-0.5 rounded bg-zinc-950/80 backdrop-blur-md text-white">
                            {proj.category}
                          </span>
                        </div>
                        <div className="p-3">
                          <h4 className="text-xs font-bold text-zinc-950 line-clamp-1">
                            {proj.title}
                          </h4>
                          <p className="text-[10px] text-zinc-600 line-clamp-2 mt-1 leading-snug">
                            {proj.description}
                          </p>

                          <div className="flex flex-wrap gap-1 mt-2 mb-2.5">
                            {proj.tags.slice(0, 3).map((tag, i) => (
                              <span
                                key={i}
                                className="text-[8px] px-1.5 py-0.2 rounded bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <a
                            href={proj.projectUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full py-1.5 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white text-[10px] font-bold flex items-center justify-center gap-1 transition-colors shadow-sm"
                          >
                            <span>View Project</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {/* TAB 3: STORE ITEMS */}
              {activePreviewTab === "store" && (
                <div className="space-y-2.5 text-left">
                  <div
                    className={`p-3 ${profile.theme.cardBg} ${profile.theme.buttonRadius} border border-zinc-200/90 shadow-sm flex items-center justify-between`}
                  >
                    <div>
                      <div className="text-[11px] font-bold text-zinc-950">
                        Digital Store
                      </div>
                      <div className="text-[9px] text-emerald-600 font-semibold">
                        Instant 1-Click Checkout
                      </div>
                    </div>
                    <span className="text-[11px] font-bold text-zinc-950">$49</span>
                  </div>
                </div>
              )}

              {/* TAB 4: STATS / MEDIA KIT */}
              {activePreviewTab === "mediakit" && (
                <div className="space-y-2 text-left">
                  <div
                    className={`p-3 ${profile.theme.cardBg} ${profile.theme.buttonRadius} border border-zinc-200/90 shadow-sm`}
                  >
                    <div className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">
                      Verified Monthly Reach
                    </div>
                    <div className="text-base font-extrabold text-zinc-950 mt-0.5">
                      128,400+
                    </div>
                  </div>
                </div>
              )}

              {/* Footer inside phone */}
              <div className="mt-auto pt-6 pb-2 text-[9px] text-zinc-400 text-center">
                Powered by Webworks • 100% Free
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
