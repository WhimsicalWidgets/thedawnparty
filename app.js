import { createApp } from 'vue';

const app = createApp({
    data() {
        return {
            messages: [
                {
                    author: 'Kim Cattrall',
                    date: 'April 15, 2024',
                    content: 'Cannot wait to see you all on the Norwegian Dawn! This ship holds a special place in my heart. ✨'
                }
            ],
            newMessage: '',
            showProfileModal: false,
            profile: {
                name: '',
                cabin: '',
                bio: ''
            }
        }
    },
    methods: {
        postMessage() {
            if (!this.newMessage.trim()) return;
            
            this.messages.unshift({
                author: this.profile.name || 'Anonymous',
                date: new Date().toLocaleDateString(),
                content: this.newMessage
            });
            
            this.newMessage = '';
        },
        saveProfile() {
            // Here you would typically save to a backend
            localStorage.setItem('profile', JSON.stringify(this.profile));
            this.showProfileModal = false;
        }
    },
    mounted() {
        // Load profile if exists
        const savedProfile = localStorage.getItem('profile');
        if (savedProfile) {
            this.profile = JSON.parse(savedProfile);
        }
    }
});

app.mount('#app');

