import React, { useEffect, useRef, useState, useCallback } from "react";
import "./GardenStyle.css";

// Modern environment assets
const ASSETS = {
  tiles: [
    "/assets/modern/tiles/grass-light.png",
    "/assets/modern/tiles/grass-dark.png",
    "/assets/modern/tiles/path-stone.png",
    "/assets/modern/tiles/path-wooden.png",
    "/assets/modern/tiles/water.png",
  ],
  plants: [
    "/assets/modern/plants/flower-violet.png",
    "/assets/modern/plants/flower-blue.png",
    "/assets/modern/plants/herb-green.png",
    "/assets/modern/plants/herb-medicinal.png",
    "/assets/modern/plants/ayurvedic-plant.png",
  ],
  trees: [
    "/assets/modern/trees/tree-sacred.png",
    "/assets/modern/trees/tree-healing.png",
    "/assets/modern/trees/tree-neem.png",
  ],
  avatars: [
    "/assets/modern/avatars/healer.png",
    "/assets/modern/avatars/practitioner.png",
    "/assets/modern/avatars/herbalist.png",
  ],
  environment: [
    "/assets/modern/environment/stone-healing.png",
    "/assets/modern/environment/meditation-spot.png",
    "/assets/modern/environment/ayurvedic-shrine.png",
    "/assets/modern/environment/incense.png",
  ],
  particles: [
    "/assets/modern/effects/glow-green.png",
    "/assets/modern/effects/sparkle-healing.png",
    "/assets/modern/effects/herbs-floating.png",
  ],
  ui: {
    compassRose: "/assets/modern/ui/compass-rose.png",
    healthIcon: "/assets/modern/ui/health-icon.svg",
    menuBackground: "/assets/modern/ui/menu-bg.png",
  },
};

// Advanced color palette for modern look
const COLORS = {
  primary: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrast: "#ffffff",
  },
  secondary: {
    main: "#00bcd4",
    light: "#4dd0e1",
    dark: "#006064",
    contrast: "#ffffff",
  },
  accent: {
    main: "#ffab00",
    light: "#ffd740",
    dark: "#c67c00",
    contrast: "#000000",
  },
  background: {
    default: "#e8f5e9",
    paper: "rgba(255, 255, 255, 0.85)",
    gradient: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
  },
  text: {
    primary: "#1b5e20",
    secondary: "#388e3c",
    disabled: "#a5d6a7",
    hint: "#81c784",
  },
};

// Create advanced placeholder assets
const createModernPlaceholder = (type, options) => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = options?.size || 64;
  canvas.height = options?.size || 64;

  if (ctx) {
    // Create gradient
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    );

    gradient.addColorStop(0, options?.centerColor || COLORS.primary.light);
    gradient.addColorStop(1, options?.edgeColor || COLORS.primary.dark);

    ctx.fillStyle = gradient;

    if (type === "circle") {
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2 - 4,
        0,
        Math.PI * 2
      );
      ctx.fill();

      // Add highlight
      ctx.beginPath();
      ctx.arc(
        canvas.width / 3,
        canvas.height / 3,
        canvas.width / 6,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.fill();
    } else if (type === "tile") {
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add texture pattern
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      for (let i = 0; i < canvas.width; i += 8) {
        for (let j = 0; j < canvas.height; j += 8) {
          if ((i + j) % 16 === 0) {
            ctx.fillRect(i, j, 4, 4);
          }
        }
      }
    } else if (type === "avatar") {
      // Create modern avatar silhouette
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2 - 10,
        canvas.width / 4,
        0,
        Math.PI * 2
      );
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(canvas.width / 3, canvas.height / 2);
      ctx.lineTo((canvas.width * 2) / 3, canvas.height / 2);
      ctx.lineTo((canvas.width * 2) / 3, (canvas.height * 3) / 4);
      ctx.lineTo(canvas.width / 3, (canvas.height * 3) / 4);
      ctx.closePath();
      ctx.fill();

      // Add highlight
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2 - 5,
        canvas.height / 2 - 15,
        canvas.width / 12,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.fill();
    }

    // Add border
    if (options?.border) {
      ctx.strokeStyle = options.borderColor || COLORS.primary.dark;
      ctx.lineWidth = options?.borderWidth || 2;

      if (type === "circle") {
        ctx.beginPath();
        ctx.arc(
          canvas.width / 2,
          canvas.height / 2,
          canvas.width / 2 - 4,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      } else {
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
      }
    }
  }

  return canvas.toDataURL();
};

const PLACEHOLDER_ASSETS = {
  tiles: [
    createModernPlaceholder("tile", {
      size: 64,
      centerColor: "#9ccc65",
      edgeColor: "#7cb342",
      border: true,
    }),
    createModernPlaceholder("tile", {
      size: 64,
      centerColor: "#81c784",
      edgeColor: "#4caf50",
      border: true,
    }),
    createModernPlaceholder("tile", {
      size: 64,
      centerColor: "#bcaaa4",
      edgeColor: "#8d6e63",
      border: true,
    }),
    createModernPlaceholder("tile", {
      size: 64,
      centerColor: "#d7ccc8",
      edgeColor: "#a1887f",
      border: true,
    }),
    createModernPlaceholder("tile", {
      size: 64,
      centerColor: "#90caf9",
      edgeColor: "#42a5f5",
      border: true,
    }),
  ],
  plants: [
    createModernPlaceholder("circle", {
      size: 32,
      centerColor: "#ba68c8",
      edgeColor: "#7b1fa2",
      border: true,
    }),
    createModernPlaceholder("circle", {
      size: 32,
      centerColor: "#64b5f6",
      edgeColor: "#1976d2",
      border: true,
    }),
    createModernPlaceholder("circle", {
      size: 32,
      centerColor: "#81c784",
      edgeColor: "#388e3c",
      border: true,
    }),
    createModernPlaceholder("circle", {
      size: 32,
      centerColor: "#fff176",
      edgeColor: "#fbc02d",
      border: true,
    }),
    createModernPlaceholder("circle", {
      size: 32,
      centerColor: "#4caf50",
      edgeColor: "#2e7d32",
      border: true,
    }),
  ],
  trees: [
    createModernPlaceholder("circle", {
      size: 80,
      centerColor: "#4caf50",
      edgeColor: "#2e7d32",
      border: true,
    }),
    createModernPlaceholder("circle", {
      size: 80,
      centerColor: "#66bb6a",
      edgeColor: "#388e3c",
      border: true,
    }),
    createModernPlaceholder("circle", {
      size: 80,
      centerColor: "#7cb342",
      edgeColor: "#558b2f",
      border: true,
    }),
  ],
  avatars: [
    createModernPlaceholder("avatar", {
      size: 48,
      centerColor: "#4db6ac",
      edgeColor: "#00796b",
      border: true,
    }),
    createModernPlaceholder("avatar", {
      size: 48,
      centerColor: "#ffb74d",
      edgeColor: "#f57c00",
      border: true,
    }),
  ],
  environment: [
    createModernPlaceholder("circle", {
      size: 48,
      centerColor: "#bdbdbd",
      edgeColor: "#757575",
      border: true,
    }),
    createModernPlaceholder("circle", {
      size: 48,
      centerColor: "#a1887f",
      edgeColor: "#5d4037",
      border: true,
    }),
    createModernPlaceholder("circle", {
      size: 48,
      centerColor: "#ce93d8",
      edgeColor: "#8e24aa",
      border: true,
    }),
    createModernPlaceholder("circle", {
      size: 48,
      centerColor: "#ffa726",
      edgeColor: "#ef6c00",
      border: true,
    }),
  ],
};

const DhanvantariVatika = () => {
  const canvasRef = useRef(null);
  const wsRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [currentUser, setCurrentUser] = useState({});
  const [users, setUsers] = useState(new Map());
  const [params, setParams] = useState({ token: "", spaceId: "" });
  const [gardenMap, setGardenMap] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState("Connecting to Dhanvantari Vatika...");
  const [viewPosition, setViewPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("map");
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Generate random particles
  const generateParticle = useCallback((x, y, type = "ambient") => {
    const types = {
      ambient: {
        size: Math.random() * 4 + 2,
        color: COLORS.primary.light,
        duration: Math.random() * 4000 + 3000,
        opacity: Math.random() * 0.4 + 0.1,
      },
      movement: {
        size: Math.random() * 6 + 4,
        color: COLORS.accent.light,
        duration: Math.random() * 1000 + 1000,
        opacity: Math.random() * 0.7 + 0.3,
      },
      interaction: {
        size: Math.random() * 8 + 6,
        color: COLORS.secondary.light,
        duration: Math.random() * 2000 + 1000,
        opacity: Math.random() * 0.9 + 0.1,
      },
    };

    const settings = types[type];
    return {
      id: Date.now() + Math.random(),
      x,
      y,
      size: settings.size,
      color: settings.color,
      duration: settings.duration,
      opacity: settings.opacity,
      createdAt: Date.now(),
      type,
    };
  }, []);

  // Generate garden map with procedural generation
  const initializeGardenMap = useCallback((width, height) => {
    // Using Perlin noise approach for natural looking terrain
    const map = [];

    // Create base map with defined areas
    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        // Calculate distance from center for circular patterns
        const centerX = width / 2;
        const centerY = height / 2;
        const distFromCenter = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
        );

        // Create different zones based on distance
        let tileType;
        if (distFromCenter < width / 8) {
          // Central healing area
          tileType = { type: "special", variant: 0, walkable: true };
        } else if ((x + y) % 18 === 0) {
          // Sacred spots scattered around
          tileType = { type: "special", variant: 1, walkable: true };
        } else if (Math.abs(x - centerX) < 3 || Math.abs(y - centerY) < 3) {
          // Cross-shaped paths
          tileType = { type: "path", variant: x % 2, walkable: true };
        } else if (distFromCenter > width / 3 && Math.random() < 0.01) {
          // Occasional water features around the edge
          tileType = { type: "water", variant: 0, walkable: false };
        } else {
          // Standard grass with variance
          const grassVariant = (x + y) % 2;
          tileType = { type: "grass", variant: grassVariant, walkable: true };
        }

        // Add plants and trees with strategic placement
        if (tileType.walkable) {
          const rand = Math.random();
          if (rand < 0.08) {
            // Small plants
            const plantType = Math.floor(Math.random() * 5);
            tileType.plant = { type: "plant", variant: plantType };
          } else if (rand < 0.1 && distFromCenter > width / 5) {
            // Trees only away from center
            const treeType = Math.floor(Math.random() * 3);
            tileType.object = { type: "tree", variant: treeType };
            tileType.walkable = false;
          } else if (rand < 0.12 && x % 7 === 0 && y % 7 === 0) {
            // Decorative elements in a pattern
            const decorType = Math.floor(Math.random() * 4);
            tileType.object = { type: "decor", variant: decorType };
            tileType.walkable = distFromCenter < width / 4; // Only blocks outside central area
          }
        }

        row.push(tileType);
      }
      map.push(row);
    }

    return map;
  }, []);

  // Initialize WebSocket connection and handle URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token") || "";
    const spaceId = urlParams.get("spaceId") || "";
    setParams({ token, spaceId });

    // Start loading sequence
    setTimeout(() => {
      // Create initial garden map
      setGardenMap(initializeGardenMap(40, 40));

      // Simulate loading assets
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }, 500);

    // Initialize WebSocket
    wsRef.current = new WebSocket("ws://localhost:3001");

    wsRef.current.onopen = () => {
      setIsConnected(true);
      showNotification("Connected to Dhanvantari Vatika");

      // Join the space once connected
      wsRef.current.send(
        JSON.stringify({
          type: "join",
          payload: {
            spaceId,
            token,
          },
        })
      );
    };

    wsRef.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      handleWebSocketMessage(message);
    };

    wsRef.current.onclose = () => {
      setIsConnected(false);
      showNotification("Disconnected from the garden", "error");
    };

    // Ambient particle generation
    const particleInterval = setInterval(() => {
      if (!isLoading) {
        setParticles((prev) => {
          // Remove old particles
          const now = Date.now();
          const filtered = prev.filter((p) => now - p.createdAt < p.duration);

          // Add new particles if we're not at limit
          if (filtered.length < 50) {
            const canvas = canvasRef.current;
            if (canvas) {
              const x = Math.random() * canvas.width;
              const y = Math.random() * canvas.height;
              return [...filtered, generateParticle(x, y, "ambient")];
            }
          }

          return filtered;
        });
      }
    }, 500);

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
      clearInterval(particleInterval);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [initializeGardenMap, generateParticle, isLoading]);

  const showNotification = (text, type = "info") => {
    setNotification({ text, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleWebSocketMessage = (message) => {
    switch (message.type) {
      case "space-joined":
        showNotification("You have entered Dhanvantari Vatika!", "success");

        // Initialize current user position and other users
        setCurrentUser({
          x: message.payload.spawn.x,
          y: message.payload.spawn.y,
          userId: message.payload.userId,
          avatarType: Math.floor(Math.random() * 2), // Random avatar type
        });

        // Center view on player position
        setViewPosition({
          x: message.payload.spawn.x * 64, // Tile size
          y: message.payload.spawn.y * 64,
        });

        // Initialize other users from the payload
        const userMap = new Map();
        message.payload.users.forEach((user) => {
          userMap.set(user.userId, {
            ...user,
            avatarType: Math.floor(Math.random() * 2), // Random avatar for other users
          });
        });
        setUsers(userMap);

        // Add entry effect particles
        if (canvasRef.current) {
          const playerX = message.payload.spawn.x * 64;
          const playerY = message.payload.spawn.y * 64;

          // Add a burst of particles
          setParticles((prev) => [
            ...prev,
            ...Array(15)
              .fill()
              .map(() =>
                generateParticle(
                  playerX + (Math.random() - 0.5) * 60,
                  playerY + (Math.random() - 0.5) * 60,
                  "interaction"
                )
              ),
          ]);
        }
        break;

      case "user-joined":
        setUsers((prev) => {
          const newUsers = new Map(prev);
          newUsers.set(message.payload.userId, {
            x: message.payload.x,
            y: message.payload.y,
            userId: message.payload.userId,
            avatarType: Math.floor(Math.random() * 2),
          });
          return newUsers;
        });
        showNotification("A new healer has joined the garden!");
        break;

      case "movement":
        setUsers((prev) => {
          const newUsers = new Map(prev);
          const user = newUsers.get(message.payload.userId);
          if (user) {
            const oldX = user.x;
            const oldY = user.y;
            user.x = message.payload.x;
            user.y = message.payload.y;
            newUsers.set(message.payload.userId, user);

            // Add movement particles for other users
            if (canvasRef.current) {
              setParticles((prev) => [
                ...prev,
                ...Array(5)
                  .fill()
                  .map(() =>
                    generateParticle(
                      oldX * 64 + (Math.random() - 0.5) * 40,
                      oldY * 64 + (Math.random() - 0.5) * 40,
                      "movement"
                    )
                  ),
              ]);
            }
          }
          return newUsers;
        });
        break;

      case "movement-rejected":
        // Reset current user position if movement was rejected
        setCurrentUser((prev) => ({
          ...prev,
          x: message.payload.x,
          y: message.payload.y,
        }));
        showNotification("Cannot move there", "error");
        break;

      case "user-left":
        setUsers((prev) => {
          const newUsers = new Map(prev);
          const user = newUsers.get(message.payload.userId);

          // Add departure particles
          if (user && canvasRef.current) {
            setParticles((prev) => [
              ...prev,
              ...Array(10)
                .fill()
                .map(() =>
                  generateParticle(
                    user.x * 64 + (Math.random() - 0.5) * 40,
                    user.y * 64 + (Math.random() - 0.5) * 40,
                    "interaction"
                  )
                ),
            ]);
          }

          newUsers.delete(message.payload.userId);
          return newUsers;
        });
        showNotification("A healer has left the vatika");
        break;
    }
  };

  // Handle user movement
  const handleMove = useCallback(
    (newX, newY) => {
      if (
        !currentUser ||
        !wsRef.current ||
        wsRef.current.readyState !== WebSocket.OPEN
      )
        return;
      if (currentUser.x === undefined) return;

      const oldX = currentUser.x;
      const oldY = currentUser.y;

      // Check if the target tile is walkable
      const targetTile = gardenMap[newY]?.[newX];
      if (!targetTile?.walkable) {
        showNotification("That area is not accessible", "warning");
        return;
      }

      // Validate the move distance (should be only 1 tile)
      const xDiff = Math.abs(newX - oldX);
      const yDiff = Math.abs(newY - oldY);

      if (xDiff > 1 || yDiff > 1 || (xDiff === 1 && yDiff === 1)) {
        // Diagonal or too far
        return;
      }

      // Send movement request
      wsRef.current.send(
        JSON.stringify({
          type: "move",
          payload: {
            x: newX,
            y: newY,
            userId: currentUser.userId,
          },
        })
      );

      // Optimistically update position (will be reset if rejected)
      setCurrentUser((prev) => ({
        ...prev,
        x: newX,
        y: newY,
      }));

      // Update view position smoothly
      setViewPosition({
        x: newX * 64,
        y: newY * 64,
      });

      // Add movement particles
      if (canvasRef.current) {
        setParticles((prev) => [
          ...prev,
          ...Array(8)
            .fill()
            .map(() =>
              generateParticle(
                oldX * 64 + (Math.random() - 0.5) * 40,
                oldY * 64 + (Math.random() - 0.5) * 40,
                "movement"
              )
            ),
        ]);
      }
    },
    [currentUser, wsRef, gardenMap, generateParticle]
  );

  // Animation loop for smooth rendering
  useEffect(() => {
    if (isLoading) return;

    const animate = () => {
      renderGarden();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isLoading, currentUser, users, gardenMap, viewPosition, particles]);

  // Separate rendering function for better performance
  const renderGarden = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const tileSize = 64;

    // Get current viewport dimensions
    const viewportWidth = canvas.width;
    const viewportHeight = canvas.height;

    ctx.clearRect(0, 0, viewportWidth, viewportHeight);

    // Translation to center view on player
    ctx.save();
    const translateX = viewportWidth / 2 - viewPosition.x;
    const translateY = viewportHeight / 2 - viewPosition.y;
    ctx.translate(translateX, translateY);

    // Calculate visible tile range
    const startX =
      Math.floor((viewPosition.x - viewportWidth / 2) / tileSize) - 1;
    const startY =
      Math.floor((viewPosition.y - viewportHeight / 2) / tileSize) - 1;
    const endX = Math.ceil((viewPosition.x + viewportWidth / 2) / tileSize) + 1;
    const endY =
      Math.ceil((viewPosition.y + viewportHeight / 2) / tileSize) + 1;

    // Draw only visible tiles for performance
    for (
      let y = Math.max(0, startY);
      y < Math.min(gardenMap.length, endY);
      y++
    ) {
      for (
        let x = Math.max(0, startX);
        x < Math.min(gardenMap[0]?.length || 0, endX);
        x++
      ) {
        const tile = gardenMap[y]?.[x];
        if (!tile) continue;

        const posX = x * tileSize;
        const posY = y * tileSize;

        // Draw base tile
        let tileImg;
        if (tile.type === "grass") {
          tileImg = new Image();
          tileImg.src = PLACEHOLDER_ASSETS.tiles[tile.variant];
        } else if (tile.type === "path") {
          tileImg = new Image();
          tileImg.src = PLACEHOLDER_ASSETS.tiles[2 + tile.variant];
        } else if (tile.type === "water") {
          tileImg = new Image();
          tileImg.src = PLACEHOLDER_ASSETS.tiles[4];
        } else if (tile.type === "special") {
          // Special tiles with animated effect
          tileImg = new Image();
          tileImg.src = PLACEHOLDER_ASSETS.tiles[tile.variant];

          // Add glow effect
          ctx.fillStyle = `rgba(255, 255, 200, ${0.1 + 0.05 * Math.sin(Date.now() / 500)})`;
          ctx.fillRect(posX, posY, tileSize, tileSize);
        }

        ctx.drawImage(tileImg, posX, posY, tileSize, tileSize);

        // Draw plants
        if (tile.plant) {
          const plantImg = new Image();
          plantImg.src = PLACEHOLDER_ASSETS.plants[tile.plant.variant];
          ctx.drawImage(
            plantImg,
            posX + tileSize / 2 - 16,
            posY + tileSize / 2 - 16,
            32,
            32
          );
        }

        // Draw objects (trees and decor)
        if (tile.object) {
          const isTree = tile.object.type === "tree";
          const objImg = new Image();
          objImg.src = isTree
            ? PLACEHOLDER_ASSETS.trees[tile.object.variant]
            : PLACEHOLDER_ASSETS.environment[tile.object.variant];

          const objSize = isTree ? 80 : 48;
          const offsetX = isTree ? -8 : 8; // Trees are wider and centered
          const offsetY = isTree ? -40 : 8; // Trees appear taller

          ctx.drawImage(
            objImg,
            posX + offsetX,
            posY + offsetY,
            objSize,
            objSize
          );
        }

        // Draw grid lines (very subtle)
        if (tile.walkable) {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
        } else {
          ctx.strokeStyle = "rgba(0, 0, 0, 0.03)";
        }
        ctx.strokeRect(posX, posY, tileSize, tileSize);
      }
    }

    // Draw particles behind avatars
    particles.forEach((particle) => {
      if (particle.type !== "ambient") {
        const opacity = Math.min(
          1,
          1 - (Date.now() - particle.createdAt) / particle.duration
        );

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(
          opacity * particle.opacity * 255
        )
          .toString(16)
          .padStart(2, "0")}`;
        ctx.fill();
      }
    });

    // Draw other users
    users.forEach((user) => {
      if (!user.x) return;

      const x = user.x * tileSize;
      const y = user.y * tileSize;

      // Draw user shadow
      ctx.beginPath();
      ctx.ellipse(
        x + tileSize / 2,
        y + tileSize - 10,
        tileSize / 3,
        tileSize / 6,
        0,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fill();

      // Draw avatar image
      const avatarImg = new Image();
      avatarImg.src = PLACEHOLDER_ASSETS.avatars[user.avatarType];
      ctx.drawImage(
        avatarImg,
        x + tileSize / 2 - 24,
        y + tileSize / 2 - 32,
        48,
        48
      );

      // Add username with modern styling
      const name = `Healer ${user.userId?.slice(0, 5)}`;

      // Draw text background/bubble
      ctx.fillStyle = "rgba(0, 77, 64, 0.8)";
      const textWidth = ctx.measureText(name).width + 10;
      const bubbleHeight = 20;
      const bubbleX = x + tileSize / 2 - textWidth / 2;
      const bubbleY = y - 5;

      // Rounded rectangle for name background
      ctx.beginPath();
      ctx.roundRect(bubbleX, bubbleY, textWidth, bubbleHeight, [8]);
      ctx.fill();

      // Add text
      ctx.fillStyle = "#ffffff";
      ctx.font = '12px "Poppins", sans-serif';
      ctx.textAlign = "center";
      ctx.fillText(name, x + tileSize / 2, bubbleY + 14);

      // Draw light/glow effect around user
      const gradient = ctx.createRadialGradient(
        x + tileSize / 2,
        y + tileSize / 2,
        0,
        x + tileSize / 2,
        y + tileSize / 2,
        tileSize
      );
      gradient.addColorStop(0, "rgba(0, 150, 136, 0.2)");
      gradient.addColorStop(1, "rgba(0, 150, 136, 0)");

      ctx.beginPath();
      ctx.arc(x + tileSize / 2, y + tileSize / 2, tileSize, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
    });

    // Draw current user (if position is set)
    if (currentUser && currentUser.x !== undefined) {
      const x = currentUser.x * tileSize;
      const y = currentUser.y * tileSize;

      // Draw user shadow
      ctx.beginPath();
      ctx.ellipse(
        x + tileSize / 2,
        y + tileSize - 10,
        tileSize / 3,
        tileSize / 6,
        0,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      ctx.fill();

      // Pulse effect for current user
      const pulseSize = 1 + 0.05 * Math.sin(Date.now() / 200);

      // Draw player highlight
      const highlightGradient = ctx.createRadialGradient(
        x + tileSize / 2,
        y + tileSize / 2,
        0,
        x + tileSize / 2,
        y + tileSize / 2,
        tileSize * 1.2
      );
      highlightGradient.addColorStop(0, "rgba(255, 215, 64, 0.3)");
      highlightGradient.addColorStop(0.6, "rgba(255, 215, 64, 0.1)");
      highlightGradient.addColorStop(1, "rgba(255, 215, 64, 0)");

      ctx.beginPath();
      ctx.arc(
        x + tileSize / 2,
        y + tileSize / 2,
        tileSize * pulseSize,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = highlightGradient;
      ctx.fill();

      // Draw avatar image with slight bounce animation
      const bounce = Math.sin(Date.now() / 150) * 2;
      const avatarImg = new Image();
      avatarImg.src = PLACEHOLDER_ASSETS.avatars[currentUser.avatarType || 0];
      ctx.drawImage(
        avatarImg,
        x + tileSize / 2 - 24,
        y + tileSize / 2 - 32 + bounce,
        48,
        48
      );

      // Add username with modern styling
      ctx.fillStyle = "rgba(255, 171, 0, 0.9)";
      const textWidth = ctx.measureText("You").width + 16;
      const bubbleHeight = 24;
      const bubbleX = x + tileSize / 2 - textWidth / 2;
      const bubbleY = y - 10;

      // Rounded rectangle for name background
      ctx.beginPath();
      ctx.roundRect(bubbleX, bubbleY, textWidth, bubbleHeight, [12]);
      ctx.fill();

      // Add text
      ctx.fillStyle = "#000000";
      ctx.font = 'bold 14px "Poppins", sans-serif';
      ctx.textAlign = "center";
      ctx.fillText("You", x + tileSize / 2, bubbleY + 16);
    }

    // Draw ambient particles on top
    particles.forEach((particle) => {
      if (particle.type === "ambient") {
        const progress = (Date.now() - particle.createdAt) / particle.duration;
        const opacity = Math.sin(progress * Math.PI) * particle.opacity;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(opacity * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.fill();
      }
    });

    ctx.restore();
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (!currentUser || currentUser.x === undefined) return;

      const { x, y } = currentUser;
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          handleMove(x, y - 1);
          break;
        case "ArrowDown":
        case "s":
        case "S":
          handleMove(x, y + 1);
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          handleMove(x - 1, y);
          break;
        case "ArrowRight":
        case "d":
        case "D":
          handleMove(x + 1, y);
          break;
        case " ":
          // Add interaction particles at user's position when they press space
          if (canvasRef.current) {
            setParticles((prev) => [
              ...prev,
              ...Array(10)
                .fill()
                .map(() =>
                  generateParticle(
                    x * 64 + (Math.random() - 0.5) * 60,
                    y * 64 + (Math.random() - 0.5) * 60,
                    "interaction"
                  )
                ),
            ]);
          }
          break;
      }
    },
    [currentUser, handleMove, generateParticle]
  );

  const handleDirectionClick = useCallback(
    (direction) => {
      if (!currentUser || currentUser.x === undefined) return;

      const { x, y } = currentUser;
      switch (direction) {
        case "up":
          handleMove(x, y - 1);
          break;
        case "down":
          handleMove(x, y + 1);
          break;
        case "left":
          handleMove(x - 1, y);
          break;
        case "right":
          handleMove(x + 1, y);
          break;
      }
    },
    [currentUser, handleMove]
  );

  return (
    <div className="dv-garden-metaverse" onKeyDown={handleKeyDown} tabIndex={0}>
      {isLoading ? (
        <div className="dv-loading-screen">
          <div className="dv-loading-logo">
            <div className="dv-leaf"></div>
          </div>
          <h1>Dhanvantari Vatika</h1>
          <div className="dv-loading-bar">
            <div className="dv-loading-progress"></div>
          </div>
          <p>Loading the healing garden...</p>
        </div>
      ) : (
        <>
          <div className="dv-garden-header">
            <div className="dv-logo-section">
              <div className="dv-logo">
                <div className="dv-logo-inner"></div>
                <div className="dv-logo-glow"></div>
              </div>
              <h1>
                Dhanvantari Vatika<span className="dv-logo-accent">•</span>
              </h1>
            </div>
            <div className="dv-garden-status">
              <div
                className={`dv-connection-status ${isConnected ? "connected" : "disconnected"}`}
              >
                <span className="dv-status-pulse"></span>
                <div className="dv-status-text">
                  <span className="dv-status-label">Status</span>
                  <span className="dv-status-value">
                    {isConnected ? "Connected" : "Disconnected"}
                  </span>
                </div>
              </div>
              <div className="dv-divider"></div>
              <div className="dv-gardeners-count">
                <div className="dv-gardeners-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15 8C16.6569 8 18 6.65685 18 5C18 3.34315 16.6569 2 15 2C13.3431 2 12 3.34315 12 5C12 6.65685 13.3431 8 15 8Z"
                      fill="currentColor"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M16.5 9H15.5C14.6 9 13.8 9.3 13.2 9.8C14.4 10.4 15.3 11.5 15.7 12.8C17 13.4 18 14.5 18 16V18H21V16C21 12 18 9 16.5 9Z"
                      fill="currentColor"
                      fillOpacity="0.6"
                    />
                    <path
                      d="M9 13C6.33 13 1 14.34 1 17V20H17V17C17 14.34 11.67 13 9 13Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="dv-gardeners-text">
                  <span className="dv-gardeners-value">
                    {users.size + (currentUser.x !== undefined ? 1 : 0)}
                  </span>
                  <span className="dv-gardeners-label">Healers</span>
                </div>
              </div>
              <button
                className={`dv-menu-button ${isPanelOpen ? "active" : ""}`}
                onClick={() => setIsPanelOpen(!isPanelOpen)}
                aria-label="Toggle Menu"
              >
                <span className="dv-menu-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
          </div>

          {notification && (
            <div className={`dv-notification ${notification.type}`}>
              {notification.text}
            </div>
          )}

          <div className="dv-garden-main">
            {isPanelOpen && (
              <div className="dv-side-panel">
                <div className="dv-panel-tabs">
                  <button
                    className={activeTab === "map" ? "active" : ""}
                    onClick={() => setActiveTab("map")}
                  >
                    Map
                  </button>
                  <button
                    className={activeTab === "users" ? "active" : ""}
                    onClick={() => setActiveTab("users")}
                  >
                    Healers
                  </button>
                  <button
                    className={activeTab === "info" ? "active" : ""}
                    onClick={() => setActiveTab("info")}
                  >
                    Info
                  </button>
                </div>

                <div className="dv-panel-content">
                  {activeTab === "map" && (
                    <div className="dv-map-tab">
                      <h3>Dhanvantari Vatika Map</h3>
                      <div className="dv-mini-map">
                        <div
                          className="dv-player-indicator"
                          style={{
                            left: `${((currentUser.x || 0) / 40) * 100}%`,
                            top: `${((currentUser.y || 0) / 40) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <div className="dv-map-legend">
                        <div className="dv-legend-item">
                          <span className="dv-legend-color grass"></span>
                          <span>Grass</span>
                        </div>
                        <div className="dv-legend-item">
                          <span className="dv-legend-color path"></span>
                          <span>Path</span>
                        </div>
                        <div className="dv-legend-item">
                          <span className="dv-legend-color water"></span>
                          <span>Water</span>
                        </div>
                        <div className="dv-legend-item">
                          <span className="dv-legend-color special"></span>
                          <span>Healing Area</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "users" && (
                    <div className="dv-users-tab">
                      <h3>Active Healers</h3>
                      <ul className="dv-user-list">
                        <li className="dv-user-item current">
                          <div
                            className="dv-user-avatar"
                            style={{ backgroundColor: COLORS.accent.main }}
                          ></div>
                          <span className="dv-user-name">You</span>
                        </li>
                        {Array.from(users.entries()).map(([id, user]) => (
                          <li className="dv-user-item" key={id}>
                            <div
                              className="dv-user-avatar"
                              style={{ backgroundColor: COLORS.primary.main }}
                            ></div>
                            <span className="dv-user-name">
                              Healer {id.slice(0, 5)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "info" && (
                    <div className="dv-info-tab">
                      <h3>About Dhanvantari Vatika</h3>
                      <p>
                        Welcome to the healing garden of Ayurvedic knowledge.
                        Explore this virtual space to connect with other
                        practitioners and discover the power of traditional
                        medicine.
                      </p>
                      <h4>Controls:</h4>
                      <ul>
                        <li>Use arrow keys or WASD to move</li>
                        <li>Press spacebar to meditate</li>
                        <li>Meet other healers to share knowledge</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="dv-garden-container">
              <canvas
                ref={canvasRef}
                width={800}
                height={600}
                className="dv-garden-canvas"
              />
            </div>
          </div>

          <div className="dv-garden-controls">
            <div className="dv-control-panel">
              <div className="dv-direction-controls">
                <button
                  className="dv-direction-button up"
                  onClick={() => handleDirectionClick("up")}
                  aria-label="Move Up"
                >
                  <span className="dv-arrow"></span>
                </button>
                <div className="dv-horizontal-controls">
                  <button
                    className="dv-direction-button left"
                    onClick={() => handleDirectionClick("left")}
                    aria-label="Move Left"
                  >
                    <span className="dv-arrow"></span>
                  </button>
                  <button
                    className="dv-center-button"
                    onClick={() => {
                      if (canvasRef.current && currentUser.x !== undefined) {
                        setParticles((prev) => [
                          ...prev,
                          ...Array(15)
                            .fill()
                            .map(() =>
                              generateParticle(
                                currentUser.x * 64 + (Math.random() - 0.5) * 60,
                                currentUser.y * 64 + (Math.random() - 0.5) * 60,
                                "interaction"
                              )
                            ),
                        ]);
                      }
                    }}
                    aria-label="Meditate"
                  >
                    <span className="dv-center-icon"></span>
                  </button>
                  <button
                    className="dv-direction-button right"
                    onClick={() => handleDirectionClick("right")}
                    aria-label="Move Right"
                  >
                    <span className="dv-arrow"></span>
                  </button>
                </div>
                <button
                  className="dv-direction-button down"
                  onClick={() => handleDirectionClick("down")}
                  aria-label="Move Down"
                >
                  <span className="dv-arrow"></span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DhanvantariVatika;
